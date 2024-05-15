const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear o body das requisições
app.use(express.json());

// Simulando um banco de dados em memória
let users = [];''

// Rota de registro
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const newUser = { username, password };
  users.push(newUser);

  res.status(201).send('Usuário registrado com sucesso!');
});

// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(404).send('Usuário ou senha incorretos');
  }

  const token = jwt.sign({ id: user.username }, 'secret_key', { expiresIn: '2h' });

  res.status(200).send({ token });
});

// Rota protegida
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send('Acesso negado. Nenhum token fornecido.');
  }

  try {
    const decoded = jwt.verify(token, 'secret_key');
    res.status(200).send(`Bem-vindo ${decoded.id}`);
  } catch (ex) {
    res.status(400).send('Token inválido.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
