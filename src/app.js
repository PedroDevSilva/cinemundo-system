import express from "express";
const app = express();

import clienteRoutes from "./routes/clienteRoutes.js";
import acessoRoutes from "./routes/acessoRoutes.js";

app.use(express.json());
app.use("/Cliente", clienteRoutes); //agora utiliza a rota cliente
app.use("/Acesso", acessoRoutes);

export default app;