var app = new Vue({
    el: "#app",
    
    data: {
        produtos: [ 
           /* {
                nome: "Cone trufado",
                descricao: "Uma deliciosa sobremesa",
                preco: "20,00",
                quantidade: 5,
                prazoMin: 15,
                prazoMax: 20
            },
            {
                nome: "Cesta de guloseimas",
                descricao: "Hmmmm, mas que gostoso!",
                preco: "75,00",
                quantidade: 17,
                prazoMin: 15,
                prazoMax: 20
            }*/
        ]
    },
    
    methods: {
        excluir: function(indice) {
            this.produtos.splice(indice, 1);
        }
    }


})