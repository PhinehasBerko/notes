import express from "express";
import path from "path";
import fs from "fs";
import { upload } from "../services/uploader.js";
import { uploadBufferToGemini } from "../services/gemini.js";
import { extractFromFile } from "../services/extractor.js";
import { writeCsv } from "../services/csv.js";

const router = express.Router();

router.post("/extract-documents", upload.array("files"), async (req, res) => {
  try {
    const rows = [];

    for (const file of req.files) {
      // Use buffer directly
      const processedFile = await uploadBufferToGemini(file.buffer, file.originalname, file.mimetype);
      const extracted = await extractFromFile(processedFile);
      rows.push(extracted);
    }

    const outputFile = `output/incidents-${Date.now()}.csv`;
    await writeCsv(rows, outputFile);

    res.download(path.resolve(outputFile), (err) => {
      if (err) console.error(err);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Extraction failed" });
  }
});

export default router;
