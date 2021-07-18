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
            mensagem: 'Falha ao processar sua requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.get(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            mensagem: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.delete = async() => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            mensagem: 'Produto excluido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisicao'
        });
    }
}