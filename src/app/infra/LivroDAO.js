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
}
module.exports = LivroDAO;