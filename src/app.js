import express from "express";
const app = express();


import clienteRoutes from "./routes/clienteRoutes.js";

app.use(express.json());
app.use("/Cliente", clienteRoutes); //agora utiliza a rota cliente
export default app;