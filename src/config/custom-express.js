const express = require("express");
const rotas = require('../app/rotas/rotas.js');
const aplicacaoWeb = express();


rotas (aplicacaoWeb);

module.exports = aplicacaoWeb;