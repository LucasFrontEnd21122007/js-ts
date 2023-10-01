const express = require('express');
const app = express();

// Rota GET
app.get('/api/exemplo', (req, res) => {
  // Lógica para buscar dados do backend
  res.json({ mensagem: 'Dados do backend' });
});

// Rota POST
app.post('/api/exemplo', (req, res) => {
  // Lógica para processar dados do frontend
  const dados = req.body;
  // Faça algo com os dados
  res.json({ mensagem: 'Dados recebidos com sucesso' });
});

// Inicie o servidor
const porta = 3000;
app.listen(porta, () => {
  console.log(`Servidor está ouvindo na porta ${porta}`);
});