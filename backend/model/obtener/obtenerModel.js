import { connection } from "../../database/database.js";

function obtenerModel() {
  const promesa = new Promise((resolve, reject) => {
    try {
      const query = "select * from productos;";

      connection.query(query, (err, results) => {
        if (err) throw err;
        resolve(results);
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
  return promesa;
}

export { obtenerModel };
