import express from "express";
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "Cosmic Library backend alive 🚀" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
