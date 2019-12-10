const LivroDAO = require("../infra/LivroDAO");
const db = require('../../config/database');
module.exports = function(aplicacaoWeb)
{
    aplicacaoWeb.get("/",function(requisicao, resposta)
    {
        resposta.send(`<h1>Servidor em Node do leozika<h1>`);
    });

    aplicacaoWeb.get("/livros",function(requisicao, resposta)
    {
        let livroDAO = new LivroDAO(db);
        livroDAO.lista()
                .then((resultadosQuery)=>
                {
                    resposta.marko(require("../views/livros/lista/lista.marko"),
                    {
                        livros:resultadosQuery
                    });
                })
                .catch(erro => console.log(erro));
    });
}