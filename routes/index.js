module.exports = function(app) {
    app.get('/motoristas', function(req, res) {
        
        var connection = app.persistence.connectionFactory();
        var motoristaDAO = new app.persistence.MotoristaDAO(connection);

        motoristaDAO.lista(function(resultado) {
            console.log(resultado);
            res.json(resultado);
        });
    });

    
}

