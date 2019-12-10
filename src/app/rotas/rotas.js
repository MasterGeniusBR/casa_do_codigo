module.exports = function(aplicacaoWeb)
{
    aplicacaoWeb.get("/",function(requisicao, resposta)
    {
        resposta.send(`<h1>Servidor em Node do leozika<h1>`);
    });

    aplicacaoWeb.get("/livros",function(requisicao, resposta)
    {
        resposta.send(`<h2>E aew brow, area dos livros aqui!!<h2>`);
    });
}