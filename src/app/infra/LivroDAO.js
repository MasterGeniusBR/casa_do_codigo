class LivroDAO
{
    constructor(database)
    {
        this._database = database;
    }

    lista()
    {
        return new Promise((resolve, reject) =>
        {
            this._database.all("SELECT * FROM livros", (erro, resposta) => 
            {
                if(erro)
                {
                    return reject(erro);
                }
                else
                {
                    return resolve(resposta);
                }
            });
        });
    }

    buscaPorId(id)
    {
        return new Promise((resolve, reject) =>
        {
            this._database.all("SELECT * FROM livros WHERE id=?",[id], (erro, resposta) => 
            {
                if(erro)
                {
                    return reject(erro);
                }
                else
                {
                    return resolve(resposta);
                }
            });
        });
    }

    adiciona(livro)
    {
        return new Promise((resolve, reject) =>
        {
            this._database.run("INSERT INTO livros (titulo, preco, descricao) values (?,?,?)",
            [livro.titulo, livro.preco, livro.descricao],
            (erro, resposta) => 
            {
                if(erro)
                {
                    return reject(erro);
                }
                else
                {
                    return resolve(resposta);
                }
            });
        });
    }

    deletePorId(id)
    {
        return new Promise((resolve, reject) =>
        {
            this._database.run("DELETE FROM livros WHERE id=?",
            [id],
            (erro, resposta) => 
            {
                if(erro)
                {
                    return reject(erro);
                }
                else
                {
                    return resolve(resposta);
                }
            });
        });
    }

    atualiza(livro)
    {
        return new Promise((resolve, reject) =>
        {
            this._database.run("UPDATE livros SET titulo=?, preco=?, descricao=? WHERE id=?",
            [livro.titulo, livro.preco, livro.descricao, livro.id],
            (erro, resposta) => 
            {
                if(erro)
                {
                    return reject(erro);
                }
                else
                {
                    return resolve(resposta);
                }
            });
        });
    }
}
module.exports = LivroDAO;