const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true 
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;