var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    data_nscto: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    }

});

mongoose.model('Passageiro', schema);