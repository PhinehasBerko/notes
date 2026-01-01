// services/pdfUtils.js
import fs from "fs";
import pdf from "pdf-parse";

export async function hasTextContent(filePath) {
  const buffer = fs.readFileSync(filePath);
  const data = await pdf(buffer);
  return data.text && data.text.trim().length > 50;
}
