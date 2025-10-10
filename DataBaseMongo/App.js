// const http = require('http');

// const server = http.createServer((request, response) => {

//     try {
//         if (request.url == '/' && request.method == 'GET') { 
//         response.statusCode = 200;
//         response.end(JSON.stringify({"message": "Accediendo al servidor"}));
//     } else if (request.url == '/home' && request.method == 'GET') { 
//         response.statusCode = 300;
//         response.end(JSON.stringify({"message": "Accediendo a Home"}));
//     } else {
//         response.statusCode = 404;
//         response.end(JSON.stringify({"message": "no encontrado"}));
//     }
//     } catch (error) {
//        response.statusCode=500
//        response.end(JSON.stringify({"message": "Servidor no encontrado"}))
//     }

// });

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Servidor en ejecución http://${host}:${port}`);
// });

const express = require('express')
const app = express()
const userRouter = require('./routers/userRouters')

const productRouter = require('./routers/productRouters') 
const carRouter = require('./routers/carRouters') // <-- NUEVA IMPORTACIÓN

const morgan = require('morgan')
const userLogin = require('./middlewares/userLogin')
const path = require('path')
const connection = require('./database/connection') // Nota: Esto debería ser una función llamada al final

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
        const data = {
            "title": "titulo de la pagina",
            "message": "bienvenido a mi sitio WEB",
            "showMessage": true,
            "items": [1, 2, 3, 4, 5]
        }
        res.render('index', data);
    })

app.use(userLogin)
app.use(morgan('dev'))
app.use(express.json())
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/cars', carRouter)


app.listen(3000, () => {
    console.log('Aplicacion con express ejecutandose en el puerto 3000')
})