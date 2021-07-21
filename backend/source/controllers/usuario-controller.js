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
        if(data !== null) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                mensagem: 'Usuário não encontrado.'
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        if(!req.body.cpf || !req.body.nome || !req.body.endereco || !req.body.telefone || !req.body.email || !req.body.senha) {
            res.status(400).send({
                mensagem: 'Dados incompletos.'
            });
            return;
        }

        const usuario = await repository.put(req.params.id, req.body);
        if(usuario != null) {
            res.status(200).send({
                mensagem: 'Usuário atualizado com sucesso!'
            });
        } else {
            res.status(404).send({
                mensagem: 'Usuário não encontrado.'
            });
        }
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
        if(e.code === 11000) {
            res.status(400).send({
                mensagem: 'CPF e e-mail devem ser únicos.'
            });
        } else {
            res.status(500).send({
                mensagem: 'Falha ao processar sua requisição.'
            });
        }
    }
}

exports.delete = async(req, res, next) => {
    try {
        let usuario = await repository.delete(req.params.id);
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
            res.status(403).send({
                mensagem: "Acesso negado."
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).send({
            mensagem: 'Falha ao processar sua requisição.'
        });
    }
}