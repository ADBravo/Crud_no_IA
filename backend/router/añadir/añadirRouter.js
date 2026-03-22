import express from "express";
import { añadirController } from "../../controller/añadir/añadirController.js";

const app = express();

app.post("/producto", añadirController);

export { app as añadirRouter };