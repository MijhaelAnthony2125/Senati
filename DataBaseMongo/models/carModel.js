const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    matricula: { 
        type: String,
        required: true,
        unique: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    anio: {
        type: Number,
        required: true,
        min: 1900 
    },
    color: String,
    precio: {
        type: Number,
        min: 0,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);