const User = require('../models/userModel')

class UserService {
    constructor() {}

    async getAll() {
        const users = await User.find({})
        return users
    }

    async filterById(id) {
        const user = await User.findOne({ _id: id })
        return user
    }

    async create(data) {
        const user = new User(data)
        return await user.save()
    }
    
    async update(id, data) {
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            data, 
            { new: true } 
        )
        return updatedUser
    }

    async delete(id) {
        return await User.deleteOne({
            _id: id
        });
    }
}
module.exports = UserService