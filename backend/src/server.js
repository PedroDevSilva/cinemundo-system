import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 8081;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.error("Erro ao conectar ao banco:", err);
  }
}

startServer();
