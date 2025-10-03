// userController.js

exports.getAllUsers = (req, res) => {
    console.log('Accediendo a todos los usuarios')
    res.send('Accediendo a todos los usuarios') 
}

exports.getUser = (req, res) => {
    res.send('Accediendo a usuario con ID: ' + req.params.id)
}

exports.createUser = (req, res) => {
    let data = req.body
    const {nombre, apellido, email, telefono} = data
    
    // Usa res.json() para enviar datos estructurados
    res.json({nombre, apellido, email, telefono}) 
}

exports.updateUser = (req, res) => {
    let data = req.body
    const {nombre, apellido, email, telefono} = data
    
    console.log(nombre, apellido, email, telefono)
    console.log(req.params.id)
    
    // Usa res.json() para enviar datos estructurados
    res.json({message: `Usuario ${req.params.id} actualizado`, data: {nombre, apellido, email, telefono}})
}

exports.deleteUser = (req, res) => {
    res.send(req.params.id)
}

// **¡Middleware 'userLogin' eliminado de aquí para mantener la separación!**