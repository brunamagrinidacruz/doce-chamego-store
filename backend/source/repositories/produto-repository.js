'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async() => {
      console.log("getting")
      const res = await Produto.find();
      print(res);
      print("saindo...")
      return res;
}

exports.put = async(data) => {
      console.log("putting")
      var product = new Produto(data);
      await product.save();
}
  