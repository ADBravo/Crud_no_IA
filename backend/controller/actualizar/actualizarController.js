import { actualizarModel } from "../../model/actualizar/actualizarModel.js";

async function actualizarController(req, res) {
  try {
    const { id, nombre, cantidad, precio } = req.body;

    const idNum = Number(id);
    if (!id || isNaN(idNum) || idNum <= 0) {
      return res.status(400).json({
        message: "El id debe ser un número válido mayor a 0 y es obligatorio",
      });
    }

    const datosActualizar = {};

    if (nombre !== undefined) {
      if (typeof nombre !== "string" || nombre.trim() === "") {
        return res.status(400).json({
          message: "El nombre debe ser texto y no estar vacío",
        });
      }
      datosActualizar.nombre = nombre.trim();
    }

    if (cantidad !== undefined) {
      const cantidadNum = Number(cantidad);
      if (!Number.isInteger(cantidadNum) || cantidadNum < 0) {
        return res.status(400).json({
          message: "La cantidad debe ser un entero mayor o igual a 0",
        });
      }
      datosActualizar.cantidad = cantidadNum;
    }

    if (precio !== undefined) {
      const precioNum = Number(precio);
      if (isNaN(precioNum) || precioNum < 0) {
        return res.status(400).json({
          message: "El precio debe ser un número mayor o igual a 0",
        });
      }
      datosActualizar.precio = precioNum;
    }

    if (Object.keys(datosActualizar).length === 0) {
      return res.status(400).json({
        message: "Debes enviar al menos un campo para actualizar",
      });
    }

    const datos = await actualizarModel(idNum, datosActualizar);

    res.status(200).json({ message: datos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
}

export { actualizarController };
