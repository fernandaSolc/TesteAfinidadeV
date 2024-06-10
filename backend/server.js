require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db'); // Conexão com o banco de dados

app.get('/api/verify-pdx/:pdx', async (req, res) => {
  const { pdx } = req.params;
  const apiKey = req.headers['api-key'];

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Chave de API inválida' });
  }

  try {
    const result = await pool.query('SELECT name FROM students WHERE pdx = $1', [pdx]);
    if (result.rows.length > 0) {
      res.json({ name: result.rows[0].name });
    } else {
      res.status(404).json({ message: 'PDX não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar no banco de dados' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});