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

    aplicacaoWeb.get("/livros/form",function(requisicao, resposta)
    {                    
        resposta.marko(require("../views/livros/formulario/form.marko"),{livro:{}});
    });

    aplicacaoWeb.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDAO(db);
    
        livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/formulario/form.marko'),
                    { livro: livro[0] }
                )
            )
            .catch(erro => console.log(erro));
    
    });

    aplicacaoWeb.post("/livros",function(requisicao, resposta)
    {                    
        let livroDAO = new LivroDAO(db);
        livroDAO.adiciona(requisicao.body)
                .then(() => resposta.redirect("/livros"))
                .catch(erro => console.log(erro));
    });

    aplicacaoWeb.put("/livros",function(requisicao, resposta)
    {                    
        let livroDAO = new LivroDAO(db);
        livroDAO.atualiza(requisicao.body)
                .then(() => resposta.redirect("/livros"))
                .catch(erro => console.log(erro));
    });

    aplicacaoWeb.delete('/livros/:id', function(req, resp) {
        const id = req.params.id;
    
        const livroDao = new LivroDAO(db);
        livroDao.deletePorId(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    
    });

}