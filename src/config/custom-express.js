require('marko/node-require').install();
require('marko/express');
const parser = require('body-parser');

const express = require("express");
const rotas = require('../app/rotas/rotas.js');
const aplicacaoWeb = express();

aplicacaoWeb.use(parser.urlencoded(
    {
        extended:true
    }));

rotas (aplicacaoWeb);

module.exports = aplicacaoWeb;