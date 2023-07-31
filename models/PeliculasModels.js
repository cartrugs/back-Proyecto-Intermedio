const { Schema, model } = require('mongoose');

const peliculaSchema = new Schema({
    titulo: {
        type: String,
        require: true,
    },
    imagen: {
        type: String,
        require: true,
    },
    anio: {
        type: Number,
        require: true,
    },
    director: {
        type: String,
        require: true,
    },
    genero: {
        type: String,
        require: true,
    },
    duracion: {
        type: String,
        true: true,
    }

});

module.exports = model('Pelicula', peliculaSchema);