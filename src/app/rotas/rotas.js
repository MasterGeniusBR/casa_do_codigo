module.exports = function(aplicacaoWeb)
{
    aplicacaoWeb.get("/",function(requisicao, resposta)
    {
        resposta.send(`<h1>Servidor em Node do leozika<h1>`);
    });

    aplicacaoWeb.get("/livros",function(requisicao, resposta)
    {
        resposta.marko(
            require("../views/livros/lista/lista.marko"),
            {
                livros:
                [
                    {id:111,titulo:"Uma historia muito bela"},
                    {id:212,titulo:"Luke no pais das maravilhas"}
                ]
            }
        );
    });
}