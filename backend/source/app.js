'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Conexão com o MongoDB
mongoose.connect(config.connectionString);

const Produto = require('./models/produto');

const repository = require('./repositories/produto-repository');
// repository.put({
//       nome: "Cone Trufado (Maracuja)",
//       foto: "http://",
//       descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Descubra este novo sabor!",
//       preco: 7.90,
//       quantidadeEstoque: 10,
//       quantidadeVendida: 5
// })

//const usuarioRoute = require('./routes/usuario-route.js');
const produtoRoute = require('./routes/produto-route.js');

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.json({extended: false}));

//app.use('/usuario', usuarioRoute);
app.use('/produto', produtoRoute);

module.exports = app;