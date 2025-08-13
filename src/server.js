import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Rotas
import candidatosRoutes from "./routes/candidatos.routes.js";
import empresasRoutes from "./routes/empresas.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas principais
app.use("/api/candidatos", candidatosRoutes);
app.use("/api/empresas", empresasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://192.168.11.246:${PORT}`);
});
