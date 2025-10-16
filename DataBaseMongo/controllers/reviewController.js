const ReviewService = require('../services/reviewService');
const reviewService = new ReviewService();

exports.getProductReviews = async (req, res) => {
    const productId = req.params.productId;
    try {
        const reviews = await reviewService.getProductReviews(productId);
        res.status(200).json(reviews);
    } catch (error) {
        console.error("Error al obtener reseñas:", error); 
        res.status(500).json({ message: "Error interno del servidor al obtener reseñas." });
    }
};

exports.createReview = async (req, res) => {
    const { Usuario, producto, puntaje, comentario } = req.body;
    
    if (!Usuario || !producto || !puntaje || !comentario) {
        return res.status(400).json({ message: "Faltan campos obligatorios: Usuario, producto, puntaje, y comentario." });
    }

    try {
        const reviewData = { Usuario, producto, puntaje, comentario };
        await reviewService.create(reviewData);
        
        res.status(201).send('Reseña registrada exitosamente');
    } catch (error) {
        
        console.error("Error al crear reseña:", error);
        res.status(500).json({ message: 'Error interno del servidor al registrar la reseña.' });
    }
};

exports.updateReview = async (req, res) => {
    const id = req.params.id;
    const data = req.body; 

    try {
        const updatedReview = await reviewService.update(id, data);
        
        if (!updatedReview) {
            return res.status(404).json({ message: "Reseña no encontrada para actualizar." });
        }
        
        res.status(200).send('Reseña modificada exitosamente');
    } catch (error) {
        console.error("Error al actualizar reseña:", error);
        res.status(500).json({ message: 'Error interno del servidor al actualizar la reseña.' });
    }
};

exports.deleteReview = async (req, res) => {
    const id = req.params.id;
    
    try {
        const result = await reviewService.delete(id);
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Reseña no encontrada para eliminar." });
        }

        res.status(200).send('Reseña eliminada correctamente');
    } catch (error) {
        console.error(`Error al eliminar reseña ${id}:`, error);
        res.status(500).json({ message: 'Error interno del servidor al eliminar la reseña.' });
    }
};