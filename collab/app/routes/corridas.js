path = require('path');

module.exports = function(app) {

    var api = app.api.corridas;

    app.route('/v1/corridas')
       .get(api.lista)
       .post(api.adiciona);

    app.route('/v1/corridas/:corridaId')
       .get(api.buscaPorId)
       .put(api.atualiza)
       .delete(api.removePorId);
}