import express from "express";
import { añadirRouter } from "./añadir/añadirRouter.js";
import { actualizarRouter } from "./actualizar/actualizarRouter.js";
import { eliminarRouter } from "./eliminar/eliminarRouter.js";
import { obtenerRouter } from "./obtener/obtenerRouter.js";

const app = express();

app.use("/add", añadirRouter);
app.use("/update", actualizarRouter);
app.use("/delete", eliminarRouter);
app.use("/get", obtenerRouter);

export { app as router };