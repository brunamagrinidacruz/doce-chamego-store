'use strict';

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = async() => {
      console.log("get usuario");
      
      const res = await Usuario.find();
      return res;
}

exports.post = async(data) => {
      console.log("post usuario");

      let usuario = new Usuario(data);
      await usuario.save();
}
  
exports.put = async(data) => {
      console.log("put usuario");
}

exports.delete = async(data) => {
      console.log("delete usuario");
}