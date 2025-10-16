const Product = require('../models/productModel'); 

class ProductService {
    async getAll() {
        return await Product.find({});
    }

    async filterById(id) {
        return await Product.findOne({ _id: id });
    }

    async create(data) {
        const product = new Product(data);
        return await product.save();
    }
    async update(id, data) {
        const updatedProduct = await Product.findByIdAndUpdate(
            id, 
            data, 
            { new: true } 
        );
        return updatedProduct;
    }
    async delete(id) {
        return await Product.deleteOne({
            _id: id
        });
    }
}

module.exports = ProductService;