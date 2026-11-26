import express from "express";
import utentiRouter from "./routes/utenti.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// Una risorsa = un router in src/routes/ (es. src/routes/utenti.js).
app.use("/utenti", utentiRouter);

export default app;
