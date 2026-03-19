import express from "express";
import { crearNombre } from "./crear.js";
import { mostrarNombre } from "./mostrar.js";
import { actualizarNombre } from "./actualizar.js";
import { eliminarNombre } from "./eliminar.js";

const app = express();

app.post("/crear", crearNombre);
app.get("/mostrar", mostrarNombre);
app.put("/actualizar", actualizarNombre);
app.delete("/eliminar", eliminarNombre);

export { app as router };
