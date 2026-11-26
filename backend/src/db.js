import mariadb from "mariadb";

// Pool di connessione MariaDB condiviso da tutte le route.
// Le variabili DB_* sono lette qui: l'entrypoint (src/index.js)
// carica dotenv prima di importare l'app.
const pool = mariadb.createPool({
  host: process.env.DB_HOST ?? "127.0.0.1",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "qualit",
  connectionLimit: 10,
});

export default pool;
