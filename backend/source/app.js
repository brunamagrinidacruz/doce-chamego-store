'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Conexão com o MongoDB
mongoose.connect(config.connectionString);

const Produto = require('./models/produto');
const Usuario = require('./models/usuario');

const usuarioRoute = require('./routes/usuario-route.js');

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.json({extended: false}));

app.use('/usuario', usuarioRoute);

module.exports = app;