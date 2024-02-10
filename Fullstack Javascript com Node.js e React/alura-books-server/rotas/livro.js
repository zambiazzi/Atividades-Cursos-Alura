const { Router } = require('express');
const { getLivros } = require('../controladores/livro.js');

const router = Router();

router.get('/', getLivros);

router.post('/', (req, res) => {
  res.send("Você fez uma requisição do tipo POST")
})

router.patch('/', (req, res) => {
  res.send("Você fez um requisição do tipo PATCH")
})

router.delete('/', (req, res) => {
  res.send("Você fez um requisição do tipo DELETE")
})

module.exports = router;
