const http = require('http');

const server = http.createServer(function(requisicao, resposta)
{
    let respostaHtml = ""
    if(requisicao.url == "/")
    {
        respostaHtml = `<p>Servidor em Node do leozika<p>`;
    }
    else if(requisicao.url == "/livros")
    {
        respostaHtml = `<p>ta na pag de livros<p>`;
    }
    resposta.end(
        respostaHtml
    );
});

server.listen(3000);