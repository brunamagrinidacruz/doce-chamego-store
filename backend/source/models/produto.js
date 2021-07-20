'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
      nome: {
            type: String,
            required: true,
            index: true
      },
      fotos: [{
            type: String,
            required: true
      }],
      descricao: {
            type: String,
            required: true
      },
      preco: {
            type: Number,
            required: true,
      },
      quantidadeEstoque: {
            type: Number,
            required: true
      },
      quantidadeVendida: {
            type: Number,
            required: true
      }
})

module.exports = mongoose.model('Produto', schema);