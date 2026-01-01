import { ai, createFilePart } from "./gemini.js";

const PROMPT = `
You are an expert incident-report analyst.

Extract structured data from the attached document.
Each document = ONE observation.

Return ONLY valid JSON.

Schema:
{
  "employee_name": string | null,
  "date_of_birth": string | null,
  "position": string | null,
  "incident_date": string | null,
  "incident_time": string | null,
  "incident_location": string | null,
  "incident_type": string | null,
  "injury": string | null,
  "damage_description": string | null,
  "potential_severity": string | null,
  "actual_severity": string | null,
  "incident_description": string | null,
  "root_causes": string[] | null,
  "corrective_actions": string[] | null,
  "compiled_by": string | null,
  "compiled_date": string | null
}
`;

export async function extractFromFile(file) {
  if (!file.uri || !file.mimeType) {
    throw new Error("Invalid processed file: missing uri or mimeType");
  }

  const filePart = createFilePart(file);

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { text: PROMPT },
        filePart
      ]
    });

    return JSON.parse(result.text);
  } catch (err) {
    console.error("Gemini generateContent error:", err);
    throw err;
  }
}
