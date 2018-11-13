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
    if(request.url === '/') {
        response.write('<h1>Página Principal</h1>');
    }
    else if(request.url === '/bemvindo') {
        response.write('<h1>Bem-vindo!</h1>');
    }
    else {
        response.write('<h1>Página não encontrada...</h1');
    }
    // Escreve na tela
    // response.write('<h1>Hello World!</h1>');
    response.end();
});

// Indico que o servidor, assim que instanciado, será ouvido na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});