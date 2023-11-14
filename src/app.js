const express = require('express');
const morgan=require('morgan');
const config = require('./config');

const clientes = require('./modulos/clientes/rutas.js')
const app = express();

app.use(morgan('dev'));

app.set('port', config.app.port)

app.use('/api/clientes',clientes)
module.exports=app;