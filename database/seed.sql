-- Quali.T — Dati di prova per la tabella `utente` (US-02 / RF4)
-- Dipende da database/schema.sql (database + tabella gia' creati).
-- Esecuzione: mysql -u <user> -p < database/seed.sql
-- Idempotente: le email duplicate vengono aggiornate.
-- ATTENZIONE: password di prova in chiaro, solo per sviluppo.

USE qualit;

INSERT INTO utente (email, punti, pw)
VALUES
    ('mario.rossi@email.it', 1250, 'mario123'),
    ('luca.bianchi@email.it', 850, 'luca123'),
    ('anna.verdi@email.it', 2100, 'anna123'),
    ('giulia.neri@email.it', 560, 'giulia123'),
    ('francesco.ferrari@email.it', 1750, 'francesco123'),
    ('sofia.russo@email.it', 3200, 'sofia123'),
    ('matteo.conti@email.it', 430, 'matteo123'),
    ('chiara.martini@email.it', 980, 'chiara123'),
    ('alessandro.gallo@email.it', 1500, 'alessandro123'),
    ('elena.moretti@email.it', 2750, 'elena123')
ON DUPLICATE KEY UPDATE
    punti = VALUES(punti),
    pw = VALUES(pw);
