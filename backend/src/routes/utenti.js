import { Router } from "express";
import pool from "../db.js";

const router = Router();

// US-02 / RF4 / UC-04: creazione account cittadino (tabella `utente`).
// Body JSON: { "email": string, "pw": string }
router.post("/", async (req, res) => {
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

// RF4 (US-02 / UC-04): modifica parziale delle informazioni utente (tabella `utente`).
// PATCH /utenti con body { "id_utente": number, "email"?: string, "pw"?: string, "punti"?: number }
// oppure PATCH /utenti/:id_utente con body parziale { "email"?: string, "pw"?: string, "punti"?: number }.
// Aggiorna solo i campi presenti nel body; gli altri restano invariati.
async function aggiornaUtente(req, res) {
  const idRaw = req.params?.id_utente ?? req.body?.id_utente ?? req.body?.id;
  const idUtente = Number(idRaw);

  if (!Number.isInteger(idUtente) || idUtente <= 0) {
    return res.status(400).json({ error: "id_utente valido obbligatorio" });
  }

  const { email, pw, punti } = req.body ?? {};
  const campi = [];
  const valori = [];

  if (email !== undefined) {
    if (typeof email !== "string" || !email.includes("@") || email.trim() === "") {
      return res.status(400).json({ error: "email valida obbligatoria" });
    }
    campi.push("email = ?");
    valori.push(email.trim().toLowerCase());
  }
  if (pw !== undefined) {
    if (typeof pw !== "string" || pw.trim() === "") {
      return res.status(400).json({ error: "pw obbligatoria" });
    }
    campi.push("pw = ?");
    valori.push(pw);
  }
  if (punti !== undefined) {
    if (!Number.isInteger(punti) || punti < 0) {
      return res.status(400).json({ error: "punti deve essere un intero >= 0" });
    }
    campi.push("punti = ?");
    valori.push(punti);
  }

  if (campi.length === 0) {
    return res.status(400).json({ error: "nessun campo da aggiornare" });
  }

  let conn;

  try {
    conn = await pool.getConnection();

    const esistente = await conn.query(
      "SELECT id_utente FROM utente WHERE id_utente = ?",
      [idUtente],
    );
    if (!Array.isArray(esistente) || esistente.length === 0) {
      return res.status(404).json({ error: "utente non trovato" });
    }

    await conn.query(`UPDATE utente SET ${campi.join(", ")} WHERE id_utente = ?`, [
      ...valori,
      idUtente,
    ]);

    const righe = await conn.query(
      "SELECT id_utente, email, punti FROM utente WHERE id_utente = ?",
      [idUtente],
    );
    const utenteAggiornato = Array.isArray(righe) ? righe[0] : null;

    return res.status(200).json({
      id_utente: Number(utenteAggiornato.id_utente),
      email: utenteAggiornato.email,
      punti: Number(utenteAggiornato.punti),
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
}

router.patch("/", aggiornaUtente);
router.patch("/:id_utente", aggiornaUtente);

export default router;
