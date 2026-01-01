// services/pdfToImages.js
import { fromPath } from "pdf-poppler";
import path from "path";
import fs from "fs";

export async function pdfToImages(pdfPath) {
  const outputDir = pdfPath.replace(".pdf", "_images");
  fs.mkdirSync(outputDir, { recursive: true });

  const converter = fromPath(pdfPath, {
    density: 200,
    savePath: outputDir,
    format: "png",
    width: 1654,
    height: 2339
  });

  await converter.bulk(-1);

  return fs
    .readdirSync(outputDir)
    .map(f => path.join(outputDir, f));
}
