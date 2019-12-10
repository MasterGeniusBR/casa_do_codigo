const express = require("express");

const aplicacaoWeb = express();

aplicacaoWeb.listen(3000, function()
{
    console.log(`ouvindo na porta 3000`);
});

aplicacaoWeb.get("/",function(requisicao, resposta)
{
    resposta.send(`<h1>Servidor em Node do leozika<h1>`);
});

aplicacaoWeb.get("/livros",function(requisicao, resposta)
{
    resposta.send(`<h2>E aew brow, area dos livros aqui!!<h2>`);
});

/*const http = require('http');

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

server.listen(3000);*/