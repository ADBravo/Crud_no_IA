import mysql12 from "mysql2";

const pool = mysql12.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "prueba",
});

export { pool };
