import '../dotenv/config';
import express from 'express';
import pool from './db.mjs'; // Conexão com o banco de dados

const app = express();

app.use(express.json());

app.get('/api/verify-pdx/:registrationCode', async (req, res) => {
  const { registrationCode } = req.params;
  const apiKey = req.headers['api-key'];
//TODO arrumar key e rotas
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Chave de API inválida' });
  }

  try {
    const result = await pool.query('SELECT name FROM students WHERE registration_code = $1', [registrationCode]);
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
