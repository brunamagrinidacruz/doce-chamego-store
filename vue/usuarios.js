var app = new Vue({
    el: "#app",
    
    data: {
        usuarios: [ 
            {
                nome: "Antonio Fagundes",
                cpf: "12365498758",
                email: "antonio@fagundes.com",
                endereco: "rua antonio de fagundes, 715",
                telefone: "11956875533",
                senha: "",
            },
            {
                nome: "Maria do Bairro",
                cpf: "21365478962",
                email: "maria@dobairro.com",
                endereco: "rua maria do bairro abdenur, 819",
                telefone: "11963258741",
                senha: "",
            }
        ]
    },
    
    methods: {
        excluir: function(indice) {
            this.usuarios.splice(indice, 1);
        }
    }


})