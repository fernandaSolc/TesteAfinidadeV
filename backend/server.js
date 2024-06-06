require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db'); // Conexão com o banco de dados

app.get('https://api-hml.pdcloud.dev/enrolled/matricula/', async (req, res) => {
  const { registrationCode } = req.params;
  const apiKey = req.headers['api-key'];

  if (apiKey !== process.env.VITE_API_KEY) {
    return res.status(403).json({ message: 'Chave de API inválida' });
  }

  try {
    const result = await pool.query('SELECT name FROM students WHERE registrationCode = $1', [registrationCode]);
    if (result.rows.length > 0) {
      res.json({ name: result.rows[0].name });
    } else {
      res.status(404).json({ message: 'registrationCode não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar no banco de dados' });
  }
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});