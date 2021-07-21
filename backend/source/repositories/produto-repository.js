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
      const produto = await Produto.findById(id);
      if(produto === null) {
            return produto;
      }
      
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
      return produto;
}

exports.delete = async(id) => {
      const produto = await Produto.findById(id);
      await Produto.deleteOne({ "_id": mongoose.Types.ObjectId(id) });
      return produto;
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