import express from "express";
const app = express();

import clienteRoutes from "./routes/clienteRoutes.js";
import acessoRoutes from "./routes/acessoRoutes.js";
import filmeRoutes from "./routes/filmeRoutes.js";
import generoRoutes from "./routes/generoRoutes.js";
import formaPagamentoRoutes from "./routes/formaPagamentoRoutes.js";
import pagamentoRoutes from "./routes/pagamentoRoutes.js";
import sessaoRoutes from "./routes/sessaoRoutes.js";
import salaRoutes from "./routes/salaRoutes.js";
import assentoRoutes from "./routes/assentoRoutes.js";

app.use(express.json());
app.use("/Cliente", clienteRoutes); //agora utiliza a rota cliente
app.use("/Acesso", acessoRoutes);
app.use("/Filme", filmeRoutes);
app.use("/Genero", generoRoutes);
app.use("/FormaPagamento", formaPagamentoRoutes);
app.use("/Pagamento", pagamentoRoutes);
app.use("/Sessao", sessaoRoutes);
app.use("/Sala", salaRoutes);
app.use("/Assento", assentoRoutes);

export default app;