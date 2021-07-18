'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usuarioRoute = require('./routes/usuario-route.js');

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.json({extended: false}));

app.use('/usuario', usuarioRoute);

module.exports = app;