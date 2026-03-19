import { pool } from "./db.js";

async function crearNombre(req, res) {
  try {
    const { nombre } = req.body;
    const query = "insert into nombres (nombre) values (?)";

    pool.query(query, [nombre], (err, results) => {
      res.json({ message: "Nombre guardado correctamente" });
    });
  } catch (error) {
    res.json({ message: "Error al guardar el nombre" + error });
  }
}

export { crearNombre };
