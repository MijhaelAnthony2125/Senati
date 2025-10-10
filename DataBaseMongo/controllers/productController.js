const ProductService = require('../services/productService');
const productService = new ProductService();

// GET /products
exports.getAllProducts = async (req, res) => {
    const products = await productService.getAll();
    res.status(200).json(products);
};

// GET /products/:id
exports.getProduct = async (req, res) => {
    const product = await productService.filterById(req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" }); // 404 Not Found
    }
    res.status(200).json(product);
};

// POST /products
exports.createProduct = async (req, res) => {
    try {
        const newProduct = await productService.create(req.body);
        res.status(201).json('Producto creado exitosamente'); // 201 Created
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno al crear el producto');
    }
};

// PUT /products/:id
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productService.update(req.params.id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado para actualizar" }); // 404 Not Found
        }
        res.status(200).json({ message: 'Producto modificado correctamente', product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar producto');
    }
};

// DELETE /products/:id
exports.deleteProduct = async (req, res) => {
    try {
        const result = await productService.delete(req.params.id);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Producto no encontrado para eliminar" }); // 404 Not Found
        }
        res.status(204).send(); // 204 No Content para eliminación exitosa
    } catch (error) {
        res.status(500).send('Error al eliminar producto');
    }
};