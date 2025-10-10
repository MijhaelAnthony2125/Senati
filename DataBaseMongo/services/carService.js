const Car = require('../models/carModel');

class CarService {
    async getAll() {
        return await Car.find({});
    }

    async filterById(id) {
        return await Car.findById(id);
    }

    async create(data) {
        const car = new Car(data);
        return await car.save();
    }
    
    async update(id, data) {
        // Usamos { new: true } para devolver el coche actualizado
        return await Car.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }
    
    async delete(id) {
        return await Car.deleteOne({ _id: id });
    }
}

module.exports = CarService;