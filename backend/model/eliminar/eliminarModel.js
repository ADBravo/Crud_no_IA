import { connection } from "../../database/database.js";

function eliminarModel(id) {
  const promesa = new Promise((resolve, reject) => {
    try {
      const query = "delete from productos where id = ?";

      connection.query(query, [id], (err) => {
        if (err) throw err;
        resolve("Producto eliminado correctamente");
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
  return promesa;
}

export { eliminarModel };
