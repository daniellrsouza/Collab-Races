var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/collab');

http.createServer(app).listen(3000, function() {
    console.log('Rodando na porta 3000...');
});