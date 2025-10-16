const Review = require('../models/reviewModel');
class ReviewService {
    async getProductReviews(productId) {
        return await Review.find({ producto: productId }); 
    }

    async create(data) {
        const review = new Review(data);
        return await review.save();
    }
    async update(id, data) {
        const updatedReview = await Review.findByIdAndUpdate(
            id, 
            data, 
            { new: true } 
        );
        return updatedReview;
    }
    async delete(id) {
        return await Review.deleteOne({
            _id: id
        });
    }
}
module.exports = ReviewService;