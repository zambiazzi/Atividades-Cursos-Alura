import io from "./servidor.js";

io.on("connection", (socket) => { // o on funciona como o listen
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("texto_editor", (texto) => {
    io.emit("texto_editor_clientes", texto);
  });
});
