'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async() => {
      const res = await Produto.find();
      return res;
}

exports.post = async(data) => {
      let produto = new Produto(data);
      await produto.save();
}
  
exports.put = async(id, data) => {
      await Produto
            .findByIdAndUpdate(id, {
                  $set: {
                        nome: data.nome,
                        foto: data.foto,
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