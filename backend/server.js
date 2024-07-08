import "dotenv/config";
import express from "express";
import pool from "./db.js"; // Conexão com o banco de dados

const app = express();

// Rota para testar a conexão com o banco de dados
app.get("/test-connection", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "Conectado ao banco de dados", time: result.rows[0] });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao conectar ao banco de dados",
      error: error.message,
    });
  }
});

// Rota existente corrigida
app.get("/enrolled/:registrationCode", async (req, res) => {
  const { registrationCode } = req.params;
  const apiKey = req.headers["api-key"];

  if (apiKey !== process.env.VITE_API_KEY) {
    return res.status(403).json({ message: "Chave de API inválida" });
  }

  try {
    const result = await pool.query(
      "SELECT name FROM students WHERE registrationCode = $1",
      [registrationCode]
    );
    if (result.rows.length > 0) {
      res.json({ name: result.rows[0].name });
    } else {
      res.status(404).json({ message: "registrationCode não encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar no banco de dados",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
