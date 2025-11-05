import express from "express";
import cors from "cors";
const app = express();

import clienteRoutes from "./routes/clienteRoutes.js";
import acessoRoutes from "./routes/acessoRoutes.js";
import filmeRoutes from "./routes/filmeRoutes.js";
import generoRoutes from "./routes/generoRoutes.js";
import formaPagamentoRoutes from "./routes/formaPagamentoRoutes.js";
import pagamentoRoutes from "./routes/pagamentoRoutes.js";
import ingressoRoutes from "./routes/ingressoRoutes.js";

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/Cliente", clienteRoutes); //agora utiliza a rota cliente
app.use("/Acesso", acessoRoutes);
app.use("/Filme", filmeRoutes);
app.use("/Genero", generoRoutes);
app.use("/FormaPagamento", formaPagamentoRoutes);
app.use("/Pagamento", pagamentoRoutes);
app.use("/Ingresso", ingressoRoutes);

export default app;