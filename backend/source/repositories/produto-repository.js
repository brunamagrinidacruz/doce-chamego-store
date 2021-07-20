'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async() => {
      const res = await Produto.find();
      return res;
}

exports.getById = async(id) => {
      const res = await Produto.findById(id);
      return res;
}

exports.post = async(data) => {
      console.log(data);
      let produto = new Produto({
            nome: data.nome,
            fotos: data.fotos,
            descricao: data.descricao,
            preco: data.preco,
            quantidadeEstoque: data.quantidadeEstoque,
            quantidadeVendida: data.quantidadeVendida,
      });
      await produto.save();
}
  
exports.put = async(id, data) => {
      await Produto
            .findByIdAndUpdate(id, {
                  $set: {
                        nome: data.nome,
                        fotos: data.fotos,
                        descricao: data.descricao,
                        preco: data.preco,
                        quantidadeEstoque: data.quantidadeEstoque,
                        quantidadeVendida: data.quantidadeVendida,
                  }
            });
}

exports.delete = async(id) => {
      await Produto.findOneAndRemove(id);
}

exports.sell = async(id, data) => {
      await Produto
            .findByIdAndUpdate(id, {
                  $set: {
                        quantidadeEstoque: data.quantidadeEstoque,
                        quantidadeVendida: data.quantidadeVendida,
                  }
            });
}