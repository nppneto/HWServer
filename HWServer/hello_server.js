const http = require('http');

// const requisicao = (request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('<h1>Hello World!</h1>');
//     response.end();
// }

// const server = http.createServer(requisicao);

// const serverOn = () => {
//     console.log('Servidor rodando na porta 3000');
// }

// server.listen(3000, serverOn);

// Criando servidor
const server = http.createServer((request, response) => {
    // Leitura do cabeçalho. Neste caso, fará leitura de dados html
    response.writeHead(200, {'Content-Type': 'text/html'});
    // Escreve na tela
    response.write('<h1>Hello World!</h1>');
});

// Indico que o servidor, assim que instanciado, será ouvido na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});