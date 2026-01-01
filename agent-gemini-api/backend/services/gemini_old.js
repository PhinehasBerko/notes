// // services/gemini.js
// import fs from "fs";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export const model = genAI.getGenerativeModel({
//   model: "models/gemini-1.5-pro"
// });

// const fileManager = genAI.getFileManager();

// // export async function uploadToGemini(filePath, mimeType) {
// //   const fileData = fs.readFileSync(filePath);

// //   const uploaded = await genAI.files.upload({
// //     file: {
// //       data: fileData,
// //       mimeType
// //     }
// //   });

// //   return uploaded.uri;
// // }

// export async function uploadToGemini(filePath, mimeType) {
//   const uploadResult = await fileManager.uploadFile(filePath, {
//     mimeType: mimeType,
//     displayName: filePath.split("/").pop()
//   });

//   // uploadResult.file.uri is what you pass to Gemini
//   return uploadResult.file.uri;
// }



// services/gemini.js
import fs from "fs";
import path from "path";
import FormData from "form-data";
import { GoogleGenerativeAI } from "@google/generative-ai";
import e from "express";
import dotenv from "dotenv";
dotenv.config();
/**
 * Gemini client (SDK is used ONLY for generation)
 */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("**************************************************************************")
console.log("Gemini API Key:", process.env.GEMINI_API_KEY);
console.log("**************************************************************************")
export const model = genAI.getGenerativeModel({
  model: "models/gemini-1.5-pro"
});

/**
 * Upload a document to Gemini using the REST Files API
 * (Required because JS SDK does NOT expose Files API)
 */
// export async function uploadFileToGemini(filePath, mimeType) {
//   const fileBuffer = fs.readFileSync(filePath);
//   const fileName = path.basename(filePath);

//   const response = await fetch(
//     `https://generativelanguage.googleapis.com/v1beta/files?key=${process.env.GEMINI_API_KEY}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/octet-stream",
//         "X-Goog-Upload-Protocol": "raw",
//         "X-Goog-Upload-File-Name": fileName
//       },
//       body: fileBuffer
//     }
//   );

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(
//       `Gemini file upload failed: ${response.status} ${errorText}`
//     );
//   }

//   const data = await response.json();

//   if (!data.file || !data.file.uri) {
//     throw new Error("Invalid Gemini upload response");
//   }

//   return data.file.uri;
// }

// export async function uploadFileToGemini(filePath, mimeType) {
//   const fileBuffer = fs.readFileSync(filePath);
//   const fileName = path.basename(filePath);

//   const response = await fetch(
//     `https://generativelanguage.googleapis.com/v1beta/files?uploadType=media&key=${process.env.GEMINI_API_KEY}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": mimeType,
//         "X-Goog-Upload-File-Name": fileName
//       },
//       body: fileBuffer
//     }
//   );

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(
//       `Gemini file upload failed: ${response.status} ${errorText}`
//     );
//   }

//   const data = await response.json();

//   if (!data.file?.uri) {
//     throw new Error("Gemini upload response missing file.uri");
//   }

//   const fileUri = await data.file.uri ;

//   console.log("-----------------------------------------------------")
//   console.log("Gemini file URI:", fileUri);
//   console.log("-----------------------------------------------------")

//   return fileUri;
// }


export async function uploadFileToGemini(filePath, mimeType) {
  const fileBuffer = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);

  const form = new FormData();
  form.append("file", fileBuffer, { filename: fileName, contentType: mimeType });

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/files?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini file upload failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();

  if (!data.file?.uri) {
    throw new Error("Gemini upload response missing file.uri");
  }

  const fileUri = data.file.uri;
  console.log("Gemini file URI:", fileUri);

  return fileUri;
}


/**
 * Extract structured data from an uploaded document
 */
export async function extractFromDocument({
  fileUri,
  mimeType,
  prompt
}) {
  const result = await model.generateContent([
    {
      role: "user",
      parts: [
        { text: prompt },
        {
          fileData: {
            fileUri,
            mimeType
          }
        }
      ]
    }
  ]);

  const text = result.response.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(
      `Gemini returned invalid JSON:\n${text}`
    );
  }
}

export { uploadFileToGemini as uploadToGemini };