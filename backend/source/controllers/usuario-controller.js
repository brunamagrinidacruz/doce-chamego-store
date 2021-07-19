<<<<<<< HEAD
=======
// repository.post({
//       cpf: "12365498758",
//       nome: "Marlon José Martins",
//       endereco: "Rua Antonio de Fagundes, 715",
//       telefone: "11956875533",
//       email: "marlonmartins@usp.br",
//       senha: "estasenhaehforte",
//       ehAdministrador: false
// })
// repository.post({
//       cpf: "21365478962",
//       nome: "Wellington Matos Amaral",
//       endereco: "Rua São Carlos, 5",
//       telefone: "11963258741",
//       email: "wellington@usp.br",https://www.youtube.com/watch?v=W2MpGCL8-9o
//       endereco: "Rua Dutra, 550",
//       telefone: "11968255733",
//       email: "heloisa@gmail.br",
//       senha: "2704heloisa",
//       ehAdministrador: false
// })

>>>>>>> df145cbd0e1be510397cb9d397281bd2bf80750f
'use strict';

const repository = require('../repositories/usuario-repository.js');

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