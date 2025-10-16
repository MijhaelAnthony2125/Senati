const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    Usuario: {
        type: String, 
        required: true
    },
    producto: {
        type: String, 
        required: true
    },
    puntaje: {
        type: Number,
        required: true,
        min: 1, 
        max: 5
    },
    comentario: {
        type: String,
        trim: true,
        maxlength: 500
    }
}, {
    timestamps: true
});

reviewSchema.index({ Usuario: 1, producto: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;