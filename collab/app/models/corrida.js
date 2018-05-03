var mongoose = require('mongoose');

var schema = mongoose.Schema({

    motorista: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        nome: {
            type: String,
            required: true
        } 
    },
    passageiro: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        nome: {
            type: String,
            required: true
        } 
    },
    valor: {
        type: Number,
        required: true
    }

});

mongoose.model('Corrida', schema);