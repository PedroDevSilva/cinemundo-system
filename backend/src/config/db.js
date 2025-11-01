import mssql from "mssql";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve('.../.env') });


const sql = mssql;

const config = {
  user: process.env.DB_USER?.trim(),
  password: process.env.DB_PASS?.trim(),
  server: process.env.DB_SERVER?.trim(),
  database: process.env.DB_DATABASE?.trim(),
  port: parseInt(process.env.DB_PORT) || 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

console.log("Config do MSSQL:", config);

let pool;

async function connectDB() {
  if (!pool) {
    pool = await sql.connect(config);
    console.log("Conectado ao banco de dados!");
  }
  return pool;
}

export { sql, connectDB };
