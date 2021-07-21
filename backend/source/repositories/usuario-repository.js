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
  
exports.put = async(id, data) => {
      const usuario = await Usuario.findById(id);
      if(usuario === null) {
            return usuario;
      }
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
      return usuario;
}

exports.delete = async(id) => {
      const usuario = await Usuario.findById(id);
      await Usuario.deleteOne({"_id": mongoose.Types.ObjectId(id) });
      return usuario;
}
  
exports.authenticate = async(data) => {
      const res = await Usuario.findOne({
          email: data.email,
          senha: data.senha
      });
      return res;
}