const express = require('express');
const rotaLivro = require('./rotas/livro.js');

const app = express();
app.use(express.json()); // permite que a aplicação leia e utilize arquivos json

app.use('/livros', rotaLivro);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`servidor escutando na porta ${PORT}`)
})
