import "dotenv/config";
import express from "express";
import mariadb from "mariadb";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

const pool = mariadb.createPool({
  host: process.env.DB_HOST ?? "127.0.0.1",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "qualit",
  connectionLimit: 10,
});

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// US-02 / RF4 / UC-04: creazione account cittadino (tabella `utente`).
// Body JSON: { "email": string, "pw": string }
app.post("/utenti", async (req, res) => {
  const { email, pw } = req.body ?? {};

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "email valida obbligatoria" });
  }
  if (!pw || typeof pw !== "string" || pw.trim() === "") {
    return res.status(400).json({ error: "pw obbligatoria" });
  }

  const emailPulita = email.trim().toLowerCase();
  let conn;

  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      "INSERT INTO utente (email, punti, pw) VALUES (?, 0, ?)",
      [emailPulita, pw],
    );

    return res.status(201).json({
      id_utente: Number(result.insertId),
      email: emailPulita,
      punti: 0,
    });
  } catch (err) {
    if (err && (err.code === "ER_DUP_ENTRY" || err.errno === 1062)) {
      return res.status(409).json({ error: "email gia registrata" });
    }
    console.error(err);
    return res.status(500).json({ error: "Errore interno del server" });
  } finally {
    if (conn) conn.release();
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Quali.T backend in ascolto sulla porta ${port}`);
});
