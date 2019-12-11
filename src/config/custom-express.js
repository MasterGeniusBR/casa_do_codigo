require('marko/node-require').install();
require('marko/express');
const parser = require('body-parser');
const methodOverride = require("method-override");
const express = require("express");
const rotas = require('../app/rotas/rotas.js');
const aplicacaoWeb = express();

aplicacaoWeb.use("/estatico",express.static("./src/public"));

aplicacaoWeb.use(parser.urlencoded({extended:true}));
aplicacaoWeb.use(methodOverride(function (req, res) 
{
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}));
rotas (aplicacaoWeb);

module.exports = aplicacaoWeb;