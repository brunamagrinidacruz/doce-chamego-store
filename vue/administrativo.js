var app = new Vue({
   data: {
        produto: [ 
            {
                nome: "Cone trufado",
                descricao: "Uma deliciosa sobremesa",
                preco: "20,00",
                quantidade: 5,
                prazoMin: 15,
                prazoMax: 20
            }
            {
                nome: "Cesta de guloseimas",
                descricao: "Uma deliciosa sobremesa",
                preco: "75,00",
                quantidade: 5,
                prazoMin: 15,
                prazoMax: 20
            }
        ]
   } 

   methods: {
        removerProduto
   }
})