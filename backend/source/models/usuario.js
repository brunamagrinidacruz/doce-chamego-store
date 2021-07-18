'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
      cpf: {
            type: String,
            required: true,
            unique: true
      },
      nome: {
            type: String,
            required: true,
      },
      endereco: {
            type: String,
            required: true,
      },
      telefone: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
            unique: true
      },
      senha: {
            type: String,
            required: true,
      },
      ehAdministrador: {
            type: Boolean,
            required: true,
            default: false
      }
});

module.exports = mongoose.model('Usuario', schema);