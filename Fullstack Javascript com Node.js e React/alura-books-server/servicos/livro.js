const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync('livros.json'))

  const livroFiltrado = livros.filter( livro => livro.id === id  )[0]
  return livroFiltrado
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync('livros.json'))

  const novaListaDeLivros = [...livros, livroNovo ]

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
  const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
  // aqui o comando pega o objeto pelo id que será modificado, com isso, ...modificadores verificará se o campo nome já existe
  // se já, ele altera, se não, ele cria
  livrosAtuais[indiceModificado] = conteudoMudado

  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

module.exports = { 
  getTodosLivros, 
  getLivroPorId, 
  insereLivro,
  modificaLivro 
};
