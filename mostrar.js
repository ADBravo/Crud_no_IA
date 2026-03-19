import { pool } from "./db.js";

async function mostrarNombre(req, res) {
  try {
    const query = "select id, nombre from nombres";

    pool.query(query, (err, results) => {
      res.json(results);
    });
  } catch (error) {
    res.json({ message: "Error al mostrar nombres" + error });
  }
}

export { mostrarNombre };
