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
        let prodCarrinho = localStorage.getObject('itensCarrinho');
        
        if(prodCarrinho !== null)
            this.produto = localStorage.getObject('itensCarrinho');
    
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

            this.produto.splice(indice, 1);
            localStorage.setObject('itensCarrinho', this.produto);
        },

        finalizarCompra() {
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
                if(this.presente) {
                    alert("Os produtos serao enviados com embalagem para presente!");
                }
                this.alterarEstoque();
                this.esvaziarCarrinho();
                alert("Compra finalizada.");
            }
            
        },

        alterarEstoque: async function(){
            for(let indice = 0; indice < this.produto.length; indice++){
                if(!this.produto[indice].personalizacao){
                    this.produto[indice].quantidadeEstoque -= this.quantidadeDosProdutos[indice];
                    this.produto[indice].quantidadeVendida += this.quantidadeDosProdutos[indice];

                    try {
                        let resp = await fetch('http://localhost:3000/produto/' + this.produto[indice]._id, {
                            method: 'PUT',
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8'
                            },
                            body: JSON.stringify({
                                nome: this.produto[indice].nome,
                                preco: this.produto[indice].preco,
                                quantidadeEstoque: this.produto[indice].quantidadeEstoque,
                                quantidadeVendida: this.produto[indice].quantidadeVendida,
                                descricao: this.produto[indice].descricao,
                                fotos: this.produto[indice].fotos,
                            })
                        })

                        resp = await resp.json();
                    } catch (e) {
                        alert("Error: " + e)
                    }
                }
            }
        },
        
        esvaziarCarrinho(){
            for(let indice = 0; indice < this.produto.length; indice++){
                this.valorTotal -= (this.produto[indice].preco * this.quantidadeDosProdutos[indice]);
                this.qtdDeProdutos -= this.quantidadeDosProdutos[indice];
                this.produto.splice(indice, 1);
            }
            
            localStorage.removeItem('itensCarrinho');
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
    let numerotxt = String(numero);
    for (let i = 0; i < numerotxt.length; i++) {
        let code = numerotxt.charCodeAt(i);
        if (code < 48 || code > 57) {          
            numerotxt.value=""; 
            return false;
        }
    }
    return true;
}