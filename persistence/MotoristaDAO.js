function MotoristaDAO(connection) {
    this._connection = connection;
}

MotoristaDAO.prototype.salva = function(motorista, cb) {
    this._connection.query('INSERT INTO motoristas SET ?', motorista, cb);
}

MotoristaDAO.prototype.lista = function(cb) {
    this._connection.query('SELECT * FROM motoristas', cb);
}

MotoristaDAO.prototype.buscaPorId = function(id, cb) {
    this._connection.query('SELECT * FROM motoristas WHERE id = ?', [id], cb);
}

module.exports = function() {
    return MotoristaDAO;
}