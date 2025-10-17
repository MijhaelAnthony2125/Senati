const express = require('express');
const app = express();

const morgan = require('morgan');

const path = require('path');
const connection = require('./database/connection');
const authRouter = require('./routers/authRouter');
const dashboardRouter = require('./routers/dashboardRouter');
const socket = require('socket.io');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('index');
});


app.use(morgan('dev'));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);
app.use(express.static(__dirname + '/public'));

const server = require('http').createServer(app);
const io = socket(server);
require('./socket')(io);

server.listen(3000, () => {
    console.log('Aplicación con express ejecutandose en el puerto 3000');
});