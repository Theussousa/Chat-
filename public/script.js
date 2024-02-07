const botaoEnviar = document.getElementById('enviar');
const caixaMensangem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensangem.value !== ""){
        socket.emit('nova mensagem', caixaMensangem.value);
        caixaMensangem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
   const elementoMensagem = document.createElement('li');
   elementoMensagem.textContent = msg;
   elementoMensagem.classList.add('mensagem');
   chat.appendChild(elementoMensagem);

})