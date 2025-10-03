const express = require('express')
const app = express()

// Define la ruta principal
app.get('/', (req, res) => {
    console.log('Servidor creado con express.js')
    
    // Lo esencial: ¡Enviar una respuesta al cliente!
    res.send('¡Hola! Servidor Express activo en la ruta principal.') 
})

// Inicia el servidor
app.listen(3000, () => {
    console.log('Aplicación con express ejecutandose en el puerto 3000')
})