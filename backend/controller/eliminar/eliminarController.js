import { eliminarModel } from "../../model/eliminar/eliminarModel.js";

async function eliminarController(req, res) {
  try {
    const { id } = req.body;

    const idNum = Number(id);

    if (!id || isNaN(idNum) || idNum <= 0) {
      return res
        .status(400)
        .json({ message: "El id debe ser un número válido mayor a 0" });
    }

    const datos = await eliminarModel(idNum);

    res.status(200).json({ message: datos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
}

export { eliminarController };
