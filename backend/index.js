import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Quali.T backend in ascolto sulla porta ${port}`);
});
