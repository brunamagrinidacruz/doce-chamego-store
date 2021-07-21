Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    let value = this.getItem(key);
    return value && JSON.parse(value);
}

var app = new Vue({
    el: '#app',

    data: {
        produto: [],
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
        this.produto = localStorage.getObject('itensCarrinho');
        let pers = localStorage.getObject('personalizado');
        if(pers !== null)
            this.produto.push(pers);

        for (let indice = 0; indice < this.produto.length; indice++) {
            this.quantidadeDosProdutos[indice] = 1;
            this.valorTotal += this.produto[indice].preco * this.quantidadeDosProdutos[indice];
            this.qtdDeProdutos += this.quantidadeDosProdutos[indice];
        }
    },

    watch: {
        'quantidadeDosProdutos': function(novoValor) {
            let erro = false;
            for (let i = 0; i < novoValor.length; i++) {
                if(novoValor[i] < 0 || novoValor[i] > 30 || !isNumber(novoValor[i])) {
                    erro = true;
                    this.quantidadeDosProdutos[i] = 1;
                }
            }
            if(erro) {
                alert("Insira uma quantidade válida para o(s) produto(s)!");
                this.precoTotal()
            }
        },
    },
    
    methods: {
        removerDoCarrinho: function(indice){
            this.valorTotal -= (this.produto[indice].preco * this.quantidadeDosProdutos[indice]);
            this.qtdDeProdutos -= this.quantidadeDosProdutos[indice];

            if (!this.produto[indice].personalizacao) {
                this.produto.splice(indice, 1);
                localStorage.setObject('itensCarrinho', this.produto);
            } else {
                this.produto.splice(indice, 1);
                localStorage.setObject('personalizado', null);
            }
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
            let erroEstoque = false;
            for (indice = 0; indice < this.produto.length && this.quantidadeDosProdutos[indice] != ""; indice++) {
                this.valorTotal += (this.produto[indice].preco * this.quantidadeDosProdutos[indice]);
                if (this.quantidadeDosProdutos[indice] > this.produto[indice].quantidadeEstoque) {
                    alert("A quantidade inserida é maior do que a em estoque.");
                    erroEstoque = true;
                    break;
                }
                this.qtdDeProdutos += parseInt(this.quantidadeDosProdutos[indice], 10);
            }

            if (indice < this.produto.length) { // existe produto com o número de quantidade vazio
                this.valorTotal = valorTotalAntigo;
                this.qtdDeProdutos = qtdDeProdutosAntigo;
                this.quantidadeDosProdutos[indice] = 1;
                if (!erroEstoque) alert("Insira uma quantidade válida para o(s) produto(s)!");
                this.precoTotal()
            }
        },
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