-- Quali.T — Schema reale del database (US-02 / RF4)
-- Derivato da database/Prototipo_Finale_20261007.sql (tabella `utente`).
-- Esecuzione: mysql -u <user> -p < database/schema.sql
-- Richiede le variabili d'ambiente DB_* (vedi backend/.env.example).

CREATE DATABASE IF NOT EXISTS qualit
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE qualit;

CREATE TABLE IF NOT EXISTS utente (
    id_utente INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    punti INT NOT NULL DEFAULT 0,
    pw VARCHAR(255) NOT NULL,

    PRIMARY KEY (id_utente),
    UNIQUE KEY uk_utente_email (email),

    CONSTRAINT chk_punti
        CHECK (punti >= 0)
) ENGINE=InnoDB;
