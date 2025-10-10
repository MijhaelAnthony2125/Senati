const Product = require('../models/productModel');

class ProductService {
    async getAll() {
        return await Product.find({});
    }

    async filterById(id) {
        return await Product.findById(id);
    }

    async create(data) {
        const product = new Product(data);
        return await product.save();
    }
    
    async update(id, data) {
        // Usa findByIdAndUpdate con { new: true } para devolver el documento actualizado
        return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }
    
    async delete(id) {
        // Devuelve el resultado de la operación (incluye deletedCount)
        return await Product.deleteOne({ _id: id });
    }
}

module.exports = ProductService;