
const http = require('http');

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('Connection opened. Socket ',socket.localAddress, socket.localPort, socket);
    
});

server.on('close', ()=>{
    console.log('Connection closed.');
});

server.listen(3000);