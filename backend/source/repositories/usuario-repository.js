'use strict';

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = async() => {
      const res = await Usuario.find();
      return res;
}

exports.getById = async(id) => {
      const res = await Usuario.findById(id);
      return res;
}

exports.post = async(data) => {
      let usuario = new Usuario({
            cpf: data.cpf,
            nome: data.nome,
            endereco: data.endereco,
            telefone: data.telefone,
            email: data.email,
            senha: data.senha,
            ehAdministrador: data.ehAdministrador
      });
      await usuario.save();
}
  
exports.put = async(id) => {
      await Usuario
            .findByIdAndUpdate(id, {
                  $set: {
                        cpf: data.cpf,
                        nome: data.nome,
                        endereco: data.endereco,
                        telefone: data.telefone,
                        email: data.email,
                        senha: data.senha,
                        ehAdministrador: data.ehAdministrador
                  }
            });
}

exports.delete = async(id) => {
      await Usuario.findOneAndRemove(id);
}
  
exports.authenticate = async(data) => {
      const res = await Usuario.findOne({
          email: data.email,
          senha: data.senha
      });
      return res;
}

exports.ehAdministrador = async(data) => {
      const res = await Usuario.findOne({
            email: data.email
      });

      console.log(res);

      return res;
}