//Initialize config
const config = require("./config");

// initialize http server, socket.io ,cors and port number
const http = require("http").createServer(); 
const io = require("socket.io")(http, config.corsOptions); 

// io handlers
io.on("connection", (socket) => {
  console.log("Client Connected");
  socket.on("message", (e) => {
    socket.broadcast.emit("message", e);
  });
});
io.on("disconnect", (e) => {
  console.log("Client Disconnected");
});

//Make the server listen on port=3000
http.listen(config.PORT, () => console.log(`server listening on port: ${config.PORT}`));
