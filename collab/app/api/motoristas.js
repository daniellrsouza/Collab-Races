var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Motorista');

api.lista = function(req, res) {
    
    model.find({})
        .then(function(motoristas) {
            res.json(motoristas);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });

}

api.listaAtivos = function(req, res) {
    
    model.find({status: 'Ativo'})
        .then(function(motoristas) {
            res.json(motoristas);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });

}

api.buscaPorId = function(req, res) {
    
    model.findById(req.params.motoristaId)
         .then(function(motorista) {
            if(!motorista) throw Error('Motorista não encontrado'); // desvia o fluxo pra error
            res.json(motorista);

         }, function(error) {
             console.log(error);
             res.status(404).json(error);
         })

};

api.removePorId = function(req, res) {

    model.remove({_id: req.params.motoristaId})
         .then(function() {
            res.sendStatus(204);
         }, function(error) {
            res.status(500).json(error);
         });

};

api.adiciona = function(req, res) {

    var motorista = req.body;
    model.create(motorista)
         .then(function() {
            res.json(motorista);
         }, function(error) {
            console.log(error);
            res.status(500).json(error);
         });

};

api.atualiza = function(req, res) {
    
    model.findByIdAndUpdate(req.params.motoristaId, req.body)
         .then(function(motorista) {
            res.json(motorista);            
         }, function(error) {
            console.log(error);
            res.status(500).json(error);
         });

}

module.exports = api;