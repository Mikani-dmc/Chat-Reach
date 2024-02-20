const botaoEnviar = document.getElementById("enviar");
const caixaDeMensagem = document.getElementById("texto");
const chat = document.getElementById("mensagens");

const socket = io();

botaoEnviar.addEventListener("click", () => {
    if (caixaDeMensagem.value !=="") { //quando a caixa de mensagem esta preenchida
        socket.emit("nova mensagem", caixaDeMensagem.value); //emite a msg
        caixaDeMensagem.value = ""; // e depois limpar o valor
    }
});

socket.addEventListener("nova mensagem", (msg) => {
    const elementoMensagem = document.createElement("li") // cria um tag li no html
    elementoMensagem.textContent = msg; //<li>Ola</li>
    elementoMensagem.classList.add("mensagem"); // <li class = "mensagem" >Ola</li>
    chat.appendChild(elementoMensagem); // <div id = "mensagens"><li class = "mensagem" >Ola</li>
 })