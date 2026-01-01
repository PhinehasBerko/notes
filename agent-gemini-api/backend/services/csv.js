// services/csv.js
import { createObjectCsvWriter } from "csv-writer";

export async function writeCsv(rows, outputPath) {
  const headers = Object.keys(rows[0]).map(k => ({
    id: k,
    title: k
  }));

  const writer = createObjectCsvWriter({
    path: outputPath,
    header: headers
  });

  await writer.writeRecords(rows);
}
