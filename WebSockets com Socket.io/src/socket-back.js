import io from "./servidor.js";

io.on("connection", (socket) => { // o on funciona como o listen
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("texto_editor_clientes", texto); // envia as informações APENAS para os outros clientes
  });
});
