const mongoose = require('mongoose')
const {db}=require('../config')

const connection=mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`)
.then(() => {
    console.log('Conexión a la base de datos establecida') 
}).catch(() => {
    console.log('Error en la conexión a la base de datos')
})       

module.exports=connection