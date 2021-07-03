var app = new Vue({
    el: '#app',

    data: {
        produto: [
            { 
                nomeDoProduto: "Caixa com Cone",
                preco: 45.00,
                informacoesImportantes: "Cone de ovomaltine, maracuja e limão",
                prazoMin: 15,
                prazoMax: 20,
                qtdDoProduto: 1
            },
            { 
                nomeDoProduto: "Caixa Bar",
                preco: 60.00,
                informacoesImportantes: "Caixa tamanho M",
                prazoMin: 15,
                prazoMax: 20,
                qtdDoProduto: 1
            },
            
            
        ],
        valorTotal: 0,
        qtdDeProdutos: 0,
        presente: false,
        formaDePagamento: 
            {
                nomeDoTitular: "",
                numeroDoCartao: "",
                cvv: "",
                validade: new Date(),
            },
        erros: []
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
    watch: {
        'produto.qtdDoProduto': function (novoValor, valorAntigo) {
            if(novoValor > 0 && novoValor < 30){
                this.produto.qtdDoProduto = novoValor;
            }
            else{
                alert("Insira uma quantidade valida!");
                this.produto.qtdDoProduto = valorAntigo;
            }
        }
    },
    methods: {
        removerDoCarrinho: function(indice){
            var _vm = this;
            _vm.valorTotal -= (_vm.produto[indice].preco * _vm.produto[indice].qtdDoProduto);
            _vm.qtdDeProdutos -= _vm.produto[indice].qtdDoProduto;
            _vm.produto.splice(indice, 1);
        },
        entrar() {
            this.erros = [];

            if(!this.formaDePagamento.nomeDoTitular) {
                  this.erros.push("Digite o nome do titular.");
            }

            if(!this.formaDePagamento.numeroDoCartao || this.formaDePagamento.numeroDoCartao.length !== 16) {
                  this.erros.push("Digite o numero do cartao.");
            }
            if(!this.formaDePagamento.cvv || this.formaDePagamento.cvv.length !== 3) {
                this.erros.push("Digite o cvv.");
            }
            var data = new Date();
            if(!this.formaDePagamento.validade) {
                this.erros.push("Digite a validade.");
            } else if(new Date(this.formaDePagamento.validade) <= data){
                this.erros.push("Insira uma data valida");
            }

            if(this.erros.length === 0) {
                if(this.presente){
                    alert("Os produtos serao enviados com embalagem para presente! Aguardando a aprovacao do pagamento.")
                }else{
                    alert("Aguardando a aprovacao do pagamento.")
                }
            }
        },
        precoTotal(){
            this.valorTotal = 0;
            this.qtdDeProdutos = 0;
            for (let indice = 0; indice < this.produto.length; indice++) {
                this.valorTotal += (this.produto[indice].preco * this.produto[indice].qtdDoProduto);
                this.qtdDeProdutos += parseInt(this.produto[indice].qtdDoProduto, 10);
            }
        }
    }
})