import express from "express";
import { eliminarController } from "../../controller/eliminar/eliminarController.js";

const app = express();

app.delete("/producto", eliminarController);

export { app as eliminarRouter };