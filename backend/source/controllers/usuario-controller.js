'use strict';

const repository = require('../repositories/usuario-repository.js');

exports.get = async(req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.put(req.params.id, req.body);
        res.status(200).send({
            mensagem: 'Usuário atualizado com sucesso!'
        });
    } catch(e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.post(req.body);
        res.status(200).send({
            mensagem: 'Usuário cadastrado com sucesso!'
        });
    } catch(e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        let usuario = await repository.delete(req.params.id);
        console.log(usuario);
        if(usuario !== null) {
            res.status(200).send({
                mensagem: 'Usuário excluido com sucesso!'
            });
        } else {
            res.status(200).send({
                mensagem: 'Usuário não existe.'
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}

exports.authenticate = async(req, res, next) => {
    try {
        let data = await repository.authenticate(req.body);
        if(data != null) {
            res.status(200).send({
                ehAdministrador: data.ehAdministrador
            });
        } else {
            res.status(403).send({});
        }
    } catch(e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}