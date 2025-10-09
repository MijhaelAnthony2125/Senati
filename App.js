const express=require('express')
const app=express()
const userRouter=require('./routers/userRouters')
const morgan=require('morgan')
const userLogin=require('./middlewares/userLogin')
const path=require('path')
const connection=require('./database/connection')

// 1. CONFIGURACIÓN DE MIDDLEWARES (CORREGIDO el orden)
app.use(express.json()) // Debe ir al inicio para leer cuerpos JSON
app.use(morgan('dev'))  // Para logging HTTP
app.use(userLogin)      // Middleware de autenticación global

// Configuración de Vistas
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

// 2. DEFINICIÓN DE RUTA RAÍZ (CORREGIDO: combinada y con sintaxis correcta)
app.get('/',(req,res)=>{
  console.log('Servidor creado con express.js') // El log se mueve aquí
  const data={
    "title":"Título de la pagina",
    "message":"Bienvenido a mi sitios WEB",
    "showMessage":true,
    "items":[1,2,3,4,5]
  }
  // SINTAXIS CORREGIDA: Usando coma para pasar el objeto de datos
  res.render('index', data) 
})

// Uso del Router
app.use('/users', userRouter)

// Puerto de Escucha
app.listen(3000, () => {
    console.log('Aplicación con express ejecutándose en el puerto 3000')
})