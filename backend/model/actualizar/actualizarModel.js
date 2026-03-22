import { connection } from "../../database/database.js";

function actualizarModel(id, datos) {
  const promesa = new Promise((resolve, reject) => {
    try {
      let campos = [];
      let valores = [];

      for (const key in datos) {
        campos.push(`${key} = ?`);
        valores.push(datos[key]);
      }

      if (campos.length === 0) {
        throw new Error("No se proporcionaron campos para actualizar");
      }

      const query = `UPDATE productos SET ${campos.join(", ")} WHERE id = ?`;

      connection.query(query, [...valores, id], (err) => {
        if (err) return reject(err);
        return resolve("Producto actualizado correctamente");
      });
    } catch (error) {
      reject(error);
    }
  });
  return promesa;
}

export { actualizarModel }