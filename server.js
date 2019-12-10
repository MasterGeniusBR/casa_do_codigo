const aplicacaoWeb = require("./src/config/custom-express");

aplicacaoWeb.listen(3000, function()
{
    console.log(`ouvindo na porta 3000`);
});
