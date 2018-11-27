const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    //__dirname retorna o diretório raíz da aplicação
    fs.readFile('${__dirname}/index.html', (erro, html) => {
        response.writeReader(200, {'Content-Type': 'text/html'});
        response.write(html);
        response.end();
    });
});

server.listen(3000, () => {
    console.log('Executando site pessoal...');
})