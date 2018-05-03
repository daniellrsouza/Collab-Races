module.exports = function(uri) {
    var mongoose = require('mongoose');

    // se o banco não existe, é criado automaticamente
    mongoose.connect('mongodb://' + uri);

    // escutar evento da conexao
    mongoose.connection.on('connected', function() {
        console.log('Conectado ao MongoDB');
    });

    mongoose.connection.on('error', function(error) {
        console.log('Erro na conexão: ' + error);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB');
    });

    // escuta o evento do NODEJS para ver se finalizaram a app
    process.on('SIGINT', function() {

        mongoose.connection.close(function() {
            console.log('Conexão fechada pelo término da aplicação');
            process.exit(0);
        });
    });
}

