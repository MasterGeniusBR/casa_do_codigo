const http = require('http');

const server = http.createServer(function(requisicao, resposta)
{
    resposta.end(
        `<p>Servidor em Node do leozika<p>`
    );
});

server.listen(3000);