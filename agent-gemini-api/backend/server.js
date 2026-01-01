// server.js
import express from "express";
import extractRoutes from "./routes/extract.js";

const app = express();
app.use("/api", extractRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
