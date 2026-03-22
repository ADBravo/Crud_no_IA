import express from "express";
import { actualizarController } from "../../controller/actualizar/actualizarController.js";

const app = express();

app.patch("/producto", actualizarController);

export { app as actualizarRouter };