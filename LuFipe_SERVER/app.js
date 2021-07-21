//Principais modulos
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//Main module to export
var app = express();

//Tratamento de res/req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Set View engine
app.set('view engine', 'pug')
app.set('views','/PUG')

//Route para arquivos estaticos
app.use(express.static(path.join(__dirname, 'FrontEnd')));

//Trtamento de Rotas
var indexRouter = require('./routes/index');
app.use('/', indexRouter);


module.exports = app;
