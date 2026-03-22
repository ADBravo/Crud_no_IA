import { connection } from "../../database/database.js";

function insertarModel(nombre, cantidad, precio) {
  const promesa = new Promise((resolve, reject) => {
    try {
      const query =
        "insert into productos (nombre, cantidad, precio) values (?, ?, ?)";

      connection.query(query, [nombre, cantidad, precio], (err) => {
        if (err) throw err;
        return resolve("Producto añadido correctamente");
      });
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
  return promesa;
}

export { insertarModel };
