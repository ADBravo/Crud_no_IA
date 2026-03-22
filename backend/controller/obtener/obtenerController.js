import { obtenerModel } from "../../model/obtener/obtenerModel.js";

async function obtenerController(req, res) {
  try {
    const datos = await obtenerModel();

    res.status(200).json({ message: datos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
}

export { obtenerController };
