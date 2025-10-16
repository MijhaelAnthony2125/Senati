const ProductService = require('../services/productService');
const productService = new ProductService();
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAll();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching all products:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener productos.' });
    }
};
exports.getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productService.filterById(id);
        if (!product) {
            return res.status(404).json({
                "message": "Producto no encontrado"
            });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.createProduct = async (req, res) => {
    try {
        const data = req.body;
        await productService.create(data);
        res.status(201).send('Producto creado exitosamente');
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send('Error interno del servidor al crear producto');
    }
};
exports.updateProduct = async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    try {
        const product = await productService.filterById(id);
        if (!product) {
            return res.status(404).json({
                'message': "Producto no encontrado para actualizar."
            });
        }
        
        await productService.update(id, data);
        res.status(200).send('Se modificó el Producto correctamente');

    } catch (error) {
        console.error(`Error updating product ${id}:`, error);
        res.status(500).json({ message: 'Error interno del servidor al modificar producto.' });
    }
};

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    
    try {
        const product = await productService.filterById(id);
        if (!product) {
            return res.status(404).json({
                'message': "Producto no encontrado para eliminar."
            });
        }

        await productService.delete(id);
        res.status(200).send('Se eliminó el Producto correctamente');

    } catch (error) {
        console.error(`Error deleting product ${id}:`, error);
        res.status(500).json({ message: 'Error interno del servidor al eliminar producto.' });
    }
};