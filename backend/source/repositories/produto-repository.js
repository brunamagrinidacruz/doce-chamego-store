'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async() => {
      console.log("get produto");

      const res = await Produto.find();
      return res;
}

exports.post = async(data) => {
      console.log("post produto");

      let produto = new Produto(data);
      await produto.save();
}
  
exports.put = async(data) => {
      console.log("put produto");
}

exports.delete = async(data) => {
      console.log("delete produto");
}
  