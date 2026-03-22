import dotenv from "dotenv";
import mysql12 from "mysql2";

dotenv.config();

const connection = mysql12.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
});

connection.connect((err) => {
  if (err) throw err;
});

export { connection };
