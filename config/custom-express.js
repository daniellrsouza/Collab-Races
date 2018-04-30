var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// exporta a app (express) para os arquivos
module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());

    app.use(expressValidator());

    // incluir as rotas na variavel app com consign
    consign()
        .include('routes')
        .then('persistence')
        .into(app);

    return app;
}