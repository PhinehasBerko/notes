import { GoogleGenAI, createPartFromUri } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Upload a PDF buffer to Gemini and wait until it is ready
 * @param {Buffer} buffer 
 * @param {string} displayName 
 * @param {string} mimeType 
 */
export async function uploadBufferToGemini(buffer, displayName, mimeType) {
  const fileBlob = new Blob([buffer], { type: mimeType });

  const file = await ai.files.upload({
    file: fileBlob,
    config: { displayName }
  });

  // Poll until file processing is done
  let processedFile = await ai.files.get({ name: file.name });
  while (processedFile.state === "PROCESSING") {
    console.log(`File still processing: ${displayName}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    processedFile = await ai.files.get({ name: file.name });
  }

  // Accept READY or ACTIVE as valid
  if (processedFile.state !== "READY" && processedFile.state !== "ACTIVE") {
    throw new Error(`File failed processing: ${displayName}, state: ${processedFile.state}`);
  }

  console.log(`File uploaded and processed: ${displayName}, state: ${processedFile.state}`);
  return processedFile; // contains .uri and .mimeType
}

/**
 * Convert a processed file to a Gemini-compatible part
 */
export function createFilePart(file) {
  return createPartFromUri(file.uri, file.mimeType);
}
