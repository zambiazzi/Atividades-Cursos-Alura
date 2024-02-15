import axios from "axios";

// criando api de livros
const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" })

function getLivros() {
  const response = livrosAPI.get('/')

  return response.data // retorna todos os livros que serão requisitados
}

export {
  getLivros
}
