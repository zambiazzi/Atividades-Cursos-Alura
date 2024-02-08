const express = require('express');

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Olá mundo!')
})

app.listen(PORT, () => {
  console.log(`servidor escutando na porta ${PORT}`)
})
