var app = new Vue({
    el: '#app',
    
    beforeCreate() {
        valorTotal = 0,
        qtdDeProdutos = 0,
        presente = false
    },

    mounted(){   
        var _vm = this;
        for (let indice = 0; indice < _vm.produto.length; indice++) {
            _vm.valorTotal += _vm.produto[indice].preco * _vm.produto[indice].qtdDoProduto;
            _vm.qtdDeProdutos += _vm.produto[indice].qtdDoProduto;
        }
    },

    data: {
        produto: [
            { 
                nomeDoProduto: "Headset Logitech GPRO",
                preco: 620.00,
                informacoesImportantes: "Vendido e entregue por Doce Chamego",
                prazoMin: 15,
                prazoMax: 20,
                qtdDoProduto: 1
            },
            { 
                nomeDoProduto: "Headset Logitech GPRO",
                preco: 620.00,
                informacoesImportantes: "Vendido e entregue por Doce Chamego",
                prazoMin: 15,
                prazoMax: 20,
                qtdDoProduto: 1
            },
            
        ],
        valorTotal: 0,
        qtdDeProdutos: 0,
        presente: false
    },
    beforeCreate() {
        valorTotal = 0,
        qtdDeProdutos = 0,
        presente = false
    },

    mounted(){   
        var _vm = this;
        for (let indice = 0; indice < _vm.produto.length; indice++) {
            _vm.valorTotal += _vm.produto[indice].preco * _vm.produto[indice].qtdDoProduto;
            _vm.qtdDeProdutos += _vm.produto[indice].qtdDoProduto;
        }
    },
    methods: {
        removerDoCarrinho: function(indice){
            var _vm = this;
            _vm.valorTotal -= (_vm.produto[indice].preco * _vm.produto[indice].qtdDoProduto);
            _vm.qtdDeProdutos -= _vm.produto[indice].qtdDoProduto;
            _vm.produto.splice(indice, 1);
        },
    }
})