import express from "express";
import dotenv from "dotenv";
import { router } from "./router/router.js";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.port;

app.use("/api", router);

app.listen(port, () => {
  console.log(`proyecto corriendo en la direccion http://localhost:${port}`);
});
