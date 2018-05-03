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
    modelo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    }

}); // função construtora em Maiusculo

mongoose.model('Motorista', schema);