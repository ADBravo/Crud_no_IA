import { pool } from "./db.js";

async function actualizarNombre(req, res) {
  try {
    const { id, nombre } = req.body;
    const query = "update nombres set nombre = (?) where id = (?)";

    pool.query(query, [nombre, id], (err, results) => {
      res.json({ message: "Nombre actualizado correctamente" });
    });
  } catch (error) {
    res.json({ message: "Error al actualizar el nombre" + error });
  }
}

export { actualizarNombre };
