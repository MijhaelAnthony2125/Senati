const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0 
    },
    stock: {
        type: Number,
        default: 0,
        min: 0 
    },
    categoria: String 
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);