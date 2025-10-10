const CarService = require('../services/carService');
const carService = new CarService();

// GET /cars
exports.getAllCars = async (req, res) => {
    const cars = await carService.getAll();
    res.status(200).json(cars);
};

// GET /cars/:id
exports.getCar = async (req, res) => {
    const car = await carService.filterById(req.params.id);
    if (!car) {
        return res.status(404).json({ message: "Coche no encontrado" });
    }
    res.status(200).json(car);
};

// POST /cars
exports.createCar = async (req, res) => {
    try {
        const newCar = await carService.create(req.body);
        res.status(201).json("Coche registrado exitosamente"); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno al registrar el coche');
    }
};

// PUT /cars/:id
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await carService.update(req.params.id, req.body);
        if (!updatedCar) {
            return res.status(404).json({ message: "Coche no encontrado para actualizar" });
        }
        res.status(200).json({ message: 'Coche modificado correctamente', car: updatedCar });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar coche');
    }
};

// DELETE /cars/:id
exports.deleteCar = async (req, res) => {
    try {
        const result = await carService.delete(req.params.id);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Coche no encontrado para eliminar" });
        }
        res.status(204).send(); // 204 No Content
    } catch (error) {
        res.status(500).send('Error al eliminar coche');
    }
};