import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 3000; // se existir uma variável de ambiente ele atribui ela à porta

const caminhoAtual = url.fileURLToPath(import.meta.url); // atribui o caminho atual deste arquivo
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico)); // o express utiliza o diretorioPublico de forma estática

const servidorHttp = http.createServer(app);

servidorHttp.listen(PORT, () => {
  console.log(`servidor escutando na porta ${PORT}`);
});

const io = new Server(servidorHttp);

export default io;
