// services/ocr.js
import Tesseract from "tesseract.js";

export async function ocrImages(imagePaths) {
  let fullText = "";

  for (const image of imagePaths) {
    const { data } = await Tesseract.recognize(image, "eng", {
      logger: m => console.log(`[OCR] ${m.status}`)
    });
    fullText += data.text + "\n";
  }

  return fullText.trim();
}
export { ocrImages };