const http = require("http");
const express = require ("express");
const aplicacao = express (); //retorna um pacote de infos express

//pega os recursos http e cria um servidor com base na "aplicacao"
const servidorHttp = http.createServer(aplicacao);
const io = require("socket.io")(servidorHttp);

io.addListener("connection", (socket) => {
    console.log("Cliente conectado");
    socket.addListener("nova mensagem",(msg) => {
        io.emit("nova mensagem", msg);
    })
})


aplicacao.use(express.static("public"));

//vamos colocar o servidor para funcionar com uma porta especifica que escolhermos
servidorHttp.listen(1000, "192.168.1.14");