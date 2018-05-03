path = require('path');

module.exports = function(app) {

    var api = app.api.passageiros;

    app.route('/v1/passageiros')
       .get(api.lista)
       .post(api.adiciona);

    app.route('/v1/passageiros/:passageiroId')
       .get(api.buscaPorId)
       .put(api.atualiza)
       .delete(api.removePorId);
    
}