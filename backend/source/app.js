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
const produtoRoute = require('./routes/produto-route.js');

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.json({extended: false}));

// Habilita o CORS
app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      next();
  });

// const repository = require('./repositories/usuario-repository');
// repository.post({
//       cpf: "12365498758",
//       nome: "Marlon José Martins",
//       endereco: "Rua Antonio de Fagundes, 715",
//       telefone: "11956875533",
//       email: "marlonmartins@usp.br",
//       senha: "estasenhaehforte",
//       ehAdministrador: false
// })
// repository.post({
//       cpf: "21365478962",
//       nome: "Wellington Matos Amaral",
//       endereco: "Rua São Carlos, 5",
//       telefone: "11963258741",
//       email: "wellington@usp.br",
//       senha: "abacate123",
//       ehAdministrador: false
// })
// repository.post({
//       cpf: "32359315030",
//       nome: "Heloísa Beltramelo Magrini",
//       endereco: "Rua Dutra, 550",
//       telefone: "11968255733",
//       email: "heloisa@gmail.br",
//       senha: "2704heloisa",
//       ehAdministrador: false
// })

app.use('/usuario', usuarioRoute);
app.use('/produto', produtoRoute);

module.exports = app;
