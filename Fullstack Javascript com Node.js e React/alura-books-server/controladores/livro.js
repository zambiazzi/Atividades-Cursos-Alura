const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require("../servicos/livro.js");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
} 

function getLivro(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) { // verifica se é um número
      const livro = getLivroPorId(id);
      res.send(livro)
    } else {
      res.status(422) // entidade improcessável
      res.send("ID inválido")
    }

    
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
} 

function postLivro(req, res) {
  try {
    const livroNovo = req.body
    insereLivro(livroNovo)
    res.send("Livro inserido com sucesso.")
    res.status(201)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      const body = req.body
      modificaLivro(body, id)
      res.send("Item modificado com sucesso")
    } else {
      res.status(422)
      res.send("ID inválido")    
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      deletaLivro(id)
      res.send("Livro deletado com sucesso")
    }
  } catch (error) {
    res.status(422)
    res.send("Item modificado com sucesso")
  }
}

module.exports = { 
  getLivros, 
  getLivro, 
  postLivro,
  patchLivro,
  deleteLivro
}
