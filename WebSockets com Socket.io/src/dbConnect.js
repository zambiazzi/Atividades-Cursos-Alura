import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://admin:admin123@aluracluster.6qmugp9.mongodb.net/retryWrites=true&w=majority"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("aluraWebsockets");
  const documentosColecao = db.collection("documentos");

  console.log("Conexão com o banco realizada com sucesso!")
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };