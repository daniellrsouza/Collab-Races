var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

// ativando o middleware para compartilhar a pasta publica
app.use(express.static('./public'));
// ativando o middleware para popular o req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign({ cwd: 'app' })
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

 // habilitando o HTML5Mode
 app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;