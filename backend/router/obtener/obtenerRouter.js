import express from "express";
import { obtenerController } from "../../controller/obtener/obtenerController.js";

const app = express();

app.get("/producto", obtenerController);

export { app as obtenerRouter };