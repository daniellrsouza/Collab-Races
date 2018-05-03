path = require('path');

module.exports = function(app) {

    var api = app.api.motoristas;

    app.route('/v1/motoristas')
       .get(api.lista)
       .post(api.adiciona);

    app.route('/v1/motoristas/ativos')
       .get(api.listaAtivos)

    app.route('/v1/motoristas/:motoristaId')
       .get(api.buscaPorId)
       .put(api.atualiza)
       .delete(api.removePorId);
}