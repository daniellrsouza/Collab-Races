var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Corrida');

api.lista = function(req, res) {
    
    model.find({})
        .then(function(corridas) {
            res.json(corridas);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });

}

api.buscaPorId = function(req, res) {
    
    model.findById(req.params.corridaId)
         .then(function(corrida) {
            if(!corrida) throw Error('Corrida não encontrada'); // desvia o fluxo pra error
            res.json(corrida);

         }, function(error) {
             console.log(error);
             res.status(404).json(error);
         })

};

api.removePorId = function(req, res) {

    model.remove({_id: req.params.corridaId})
         .then(function() {
            res.sendStatus(204);
         }, function(error) {
            res.status(500).json(error);
         });

};

api.adiciona = function(req, res) {

    var corrida = req.body;
    console.log(corrida);
    model.create(corrida)
         .then(function() {
            res.json(corrida);
         }, function(error) {
            console.log(error);
            res.status(500).json(error);
         });

};

api.atualiza = function(req, res) {
    
    model.findByIdAndUpdate(req.params.corridaId, req.body)
         .then(function(corrida) {
            res.json(corrida);            
         }, function(error) {
            console.log(error);
            res.status(500).json(error);
         });

}

module.exports = api;