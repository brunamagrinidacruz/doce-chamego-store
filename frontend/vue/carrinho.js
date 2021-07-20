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
                // qtdDoProduto: 1
            },
            { 
                nomeDoProduto: "Caixa Bar",
                preco: 60.00,
                informacoesImportantes: "Caixa tamanho M",
                prazoMin: 15,
                prazoMax: 20,
                // qtdDoProduto: 1
            },
        ],
        quantidadeDosProdutos: [],
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
        let item = JSON.parse(localStorage.getItem('item'));
        
        if(item !== null){
            let itemAux = {}; 
            console.log(item.nome);
            itemAux.nomeDoProduto = item.nome;
            itemAux.preco = item.preco;
            //itemAux.informacoesImportantes = item.descricao;
            itemAux.prazoMin = item.prazoMin = 15;
            itemAux.prazoMax = item.prazoMax = 20;

            this.produto.push(itemAux);
        }
        //localStorage.removeItem('item');

        var _vm = this;

        for (let indice = 0; indice < _vm.produto.length; indice++) {
            this.quantidadeDosProdutos[indice] = 1;
            _vm.valorTotal += _vm.produto[indice].preco * this.quantidadeDosProdutos[indice];
            _vm.qtdDeProdutos += this.quantidadeDosProdutos[indice];
        }
    },

    watch: {
        'quantidadeDosProdutos': function(novoValor) {
            let erro = false;
            for(let i = 0; i < novoValor.length; i++) {
                if(novoValor[i] < 0 || novoValor[i] > 30 || !isNumber(novoValor[i])) {
                    erro = true;
                    this.quantidadeDosProdutos[i] = 1;
                }
            }
            if(erro) {
                alert("Insira uma quantidade valida para o(s) produto(s)!");
                this.precoTotal()
            }
        },
    },
    
    methods: {
        removerDoCarrinho: function(indice){
            var _vm = this;
            _vm.valorTotal -= (_vm.produto[indice].preco * this.quantidadeDosProdutos[indice]);
            _vm.qtdDeProdutos -= this.quantidadeDosProdutos[indice];
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
            let valorTotalAntigo = this.valorTotal;
            let qtdDeProdutosAntigo = this.qtdDeProdutos;

            this.valorTotal = 0;
            this.qtdDeProdutos = 0;

            let indice;
            for (indice = 0; indice < this.produto.length && this.quantidadeDosProdutos[indice] != ""; indice++) {
                this.valorTotal += (this.produto[indice].preco * this.quantidadeDosProdutos[indice]);
                this.qtdDeProdutos += parseInt(this.quantidadeDosProdutos[indice], 10);
            }

            if (indice < this.produto.length) { // existe produto com o número de quantidade vazio
                this.valorTotal = valorTotalAntigo;
                this.qtdDeProdutos = qtdDeProdutosAntigo;
                this.quantidadeDosProdutos[indice] = 1;
                alert("Insira uma quantidade valida para o(s) produto(s)!");
                this.precoTotal()
            }
        }
    }
})

function isNumber(numero) {
    let numerotxt = String(numero)
    /*console.log(numero)*/
    for (let i = 0; i < numerotxt.length; i++) {
        let code = numerotxt.charCodeAt(i);
        /*console.log(numerotxt[i], numerotxt.charCodeAt(i))*/
        if (code < 48 || code > 57) {          
            numerotxt.value=""; 
            return false;
        }
    }
    return true;
}