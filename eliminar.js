import { pool } from "./db.js";

async function eliminarNombre(req, res) {
  try {
    const { id } = req.body;
    const query = "delete from nombres where id = (?)";

    pool.query(query, [id], (err, results) => {
      res.json({ message: "Nombre eliminado correctamente" });
    });
  } catch (error) {
    res.json({ message: "Error al eliminar el nombre" + error });
  }
}

export { eliminarNombre };