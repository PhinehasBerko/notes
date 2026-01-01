import path from 'path';    
import express from 'express';
import multer from 'multer';
import { GoogleGenAI}  from "@google/genai";
import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

// Ensure uploads directory exists
const  uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}


// 1. Sanitization Function
const sanitizeFileName = (originalName) => {
    const ext = path.extname(originalName); // get .pdf
    const baseName = path.basename(originalName, ext); // get name without .pdf
    
    const safeName = baseName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-') // Replace commas, spaces, etc., with hyphens
        .replace(/-+/g, '-')       // Remove double hyphens (e.g., "--" to "-")
        .replace(/^-|-$/g, '');    // Trim hyphens from start or end

    return `${safeName}${ext}`;
};

// 2. Configure Multer Disk Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const cleanName = sanitizeFileName(file.originalname);
        // We add a timestamp to prevent issues if two files have the same name
        cb(null, `${Date.now()}-${cleanName}`);
    }
});

const upload = multer({ storage: storage });
// Configure Multer for PDF storage
// const upload = multer({ dest: 'uploads/' });

// Initialize Gemini API (Replace with your key)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});


// Define the incident schema based on your columns
const incidentSchema = {
    type: "object", // Use string "object" directly
    properties: {
        Name: { type: "string", nullable: true },
        Employee_Number: { type: "string", nullable: true },
        Date_of_Birth_Age: { type: "string", nullable: true },
        Occupation_Rank_Position: { type: "string", nullable: true },
        Length_of_Experience_Current_Position: { type: "string", nullable: true },
        Length_of_Experience_With_Employer: { type: "string", nullable: true },
        Days_on_Roster: { type: "string", nullable: true },
        Roster_Rotation_Schedule: { type: "string", nullable: true },
        Department_Rig_Number: { type: "string", nullable: true },
        Location_Site: { type: "string", nullable: true },
        Place_of_Incident_Specific: { type: "string", nullable: true },
        Date_of_Incident: { type: "string", nullable: true },
        Time_of_Incident: { type: "string", nullable: true },
        Environmental_Conditions: { type: "string", nullable: true },
        Activity_at_Time_of_Incident: { type: "string", nullable: true },
        Incident_Classification: { type: "string", nullable: true },
        Nature_of_Injury_Damage: { type: "string", nullable: true },
        Body_Part_Injured: { type: "string", nullable: true },
        Equipment_Involved: { type: "string", nullable: true },
        Potential_Severity_Rating: { type: "string", nullable: true },
        Likelihood_of_Recurrence_Rating: { type: "string", nullable: true },
        Estimated_Cost_of_Damage: { type: "string", nullable: true },
        Description_of_Incident: { type: "string", nullable: true },
        Immediate_Causes_Unsafe_Acts_Conditions: { type: "string", nullable: true },
        Root_Causes_Systemic_Failures: { type: "string", nullable: true },
        Witness_Statements: { type: "string", nullable: true },
        Immediate_Corrective_Actions: { type: "string", nullable: true },
        Long_Term_Remedial_Actions: { type: "string", nullable: true },
        Action_Responsibility_Owner: { type: "string", nullable: true },
        Completion_Date_Status: { type: "string", nullable: true },
        Disciplinary_Sanctions_Applied: { type: "string", nullable: true },
        Policy_Procedural_Changes: { type: "string", nullable: true }
    }
};

app.post('/process', upload.array('pdfs'), async (req, res) => {
    const extractedRows = [];
    const files = req.files;

    for (const file of files) {
        console.log(`Processing: ${file.originalname}`);
        
        try {
            // Step 1: Upload to Files API
            const uploadResult = await ai.files.upload({
                file:file.path, 
                config: {
                    mimeType: "application/pdf",
                    displayName: file.originalname,
                }
            });

            console.log("Upload Result:", uploadResult);
          
            // Step 2: Extract Data with Structured Output
            const result = await ai.models.generateContent({
                model: "gemini-2.0-flash", // Specify model here
                contents: [{ 
                    fileData: { fileUri: uploadResult.uri, mimeType: "application/pdf" } 
                }, { 
                    text: "Extract all fields from this incident report in JSON format. If a value of a particular field is missing, use null value for that specific for missing values" 
                }],
                config: {
                    responseMimeType: "application/json",
                    responseSchema: incidentSchema,
                }
            });
            console.log("**********************************************");
            console.log("Extraction Result:", result);
            console.log("**********************************************");
            // result.value contains the parsed object directly in @google/genai
            if (result.value) {
                extractedRows.push(result.value);
            } else {
                throw new Error("No data extracted from the document.");
            }

            console.log(`Extracted data for ${file.originalname}:`, result.value);
            // Step 3: Cleanup local file
            fs.unlinkSync(file.path);

            // Step 4: Delay for Free Tier (20 seconds)
            if (files.indexOf(file) < files.length - 1) {
                console.log("Waiting 20s to avoid Rate Limit...");
                await new Promise(r => setTimeout(r, 20000));
            }
        } catch (error) {
            console.error(`Error with ${file.originalname}:`, error.message);
        }
    }

    // Create and Send CSV
    const csvPath = './output.csv';
    const csvWriter = createObjectCsvWriter({
        path: csvPath,
        header: Object.keys(incidentSchema.properties).map(key => ({ id: key, title: key }))
    });

    await csvWriter.writeRecords(extractedRows);
    res.download(csvPath, () => fs.unlinkSync(csvPath));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));