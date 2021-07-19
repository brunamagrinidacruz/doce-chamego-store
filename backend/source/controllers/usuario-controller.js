'use strict';

// const repository = require('../repositories/usuario-repository.js');

exports.get = async(req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            mensagem: 'Usuário cadastrado com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.post(req.body)
    } catch(e) {
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.post(req.params.id, req.body)
    } catch(e) {
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição'
        });
    }
}