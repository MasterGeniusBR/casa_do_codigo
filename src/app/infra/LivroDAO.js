class LivroDAO
{
    constructor(database)
    {
        this._database = database;
    }

    lista(callback)
    {
        this._database.all("SELECT * FROM livros", (erro, resposta) => callback(erro,resposta));
    }
}
module.exports = LivroDAO;