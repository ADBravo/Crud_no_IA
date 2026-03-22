import { insertarModel } from "../../model/añadir/añadirModel.js";

async function añadirController(req, res) {
  try {
    const { nombre, cantidad, precio } = req.body;

    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
      return res
        .status(400)
        .json({ message: "El nombre es obligatorio y debe ser texto" });
    }

    const cantidadNum = Number(cantidad);

    if (!Number.isInteger(cantidadNum) || cantidadNum < 0) {
      return res
        .status(400)
        .json({ message: "La cantidad debe ser un entero mayor o igual a 0" });
    }

    const precioNum = Number(precio);

    if (isNaN(precioNum) || precioNum < 0) {
      return res
        .status(400)
        .json({ message: "El precio debe ser un número mayor o igual a 0" });
    }

    const datos = await insertarModel(nombre, cantidadNum, precioNum);

    res.status(200).json({ message: datos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al añadir el producto" });
  }
}

export { añadirController };
