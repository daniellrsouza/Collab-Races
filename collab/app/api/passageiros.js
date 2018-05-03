var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Passageiro');

api.lista = function(req, res) {

    model.find({})
        .then(function(passageiros) {
            res.json(passageiros);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });

}

api.buscaPorId = function(req, res) {
    
    model.findById(req.params.passageiroId)
         .then(function(passageiro) {
            if(!passageiro) throw Error('Passageiro não encontrado'); 
            res.json(passageiro);

         }, function(error) {
             console.log(error);
             res.status(404).json(error);
         })

};

api.removePorId = function(req, res) {

    model.remove({_id: req.params.passageiroId})
         .then(function() {
            res.sendStatus(204);
         }, function(error) {
            res.status(500).json(error);
         });

};

api.adiciona = function(req, res) {

    var passageiro = req.body;
    model.create(passageiro)
         .then(function() {
            res.json(passageiro);
         }, function(error) {
            console.log(error);
            res.status(500).json(error);
         });

};

api.atualiza = function(req, res) {
    
    model.findByIdAndUpdate(req.params.passageiroId, req.body)
         .then(function(passageiro) {
            res.json(passageiro);            
         }, function(error) {
            console.log(error);
            res.status(500).json(error);
         });

}

module.exports = api;