module.exports = function(app) {
    app.get('/motoristas', function(req, res) {
        console.log('Recebida requisição de teste na porta 3000.')
        var connection = app.persistence.connectionFactory();
        var motoristaDAO = new app.persistence.MotoristaDAO(connection);

        motoristaDAO.lista(erro, function(resultado) {
            if(erro) {
                console.log('erro ao inserir no banco:'+erro);
                res.status(400).send(erro);
            } else {
                console.log(resultado);
                res.json(resultado);
            }
        });
    });

    
}

