module.exports = function(app) {
    app.get('/motoristas', function(req, res) {
        console.log('Recebida requisição de teste na porta 3000.')
        var connection = app.persistence.connectionFactory();
        var motoristaDAO = new app.persistence.MotoristaDAO(connection);

        motoristaDAO.lista(function(resultado) {
            console.log(resultado);
            res.json(resultado);
        });
    });

    
}

