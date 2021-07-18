// repository.post({
//       nome: "Cone Trufado (Maracuja)",
//       foto: "http://",
//       descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Descubra este novo sabor!",
//       preco: 7.90,
//       quantidadeEstoque: 10,
//       quantidadeVendida: 5
// })

'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');
const azure = require('azure-storage');
const guid = require('guid');
var config = require('../config');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.get(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}