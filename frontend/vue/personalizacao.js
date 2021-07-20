var mocked_acompanhamentos_festa_na_caixa = [
      { id: 1, nome: "Fini", preco: 3 },
      { id: 2, nome: "Brigadeiro", preco: 4 },
      { id: 3, nome: "Beijinho", preco: 4 },
      { id: 4, nome: "Nutella", preco: 6 },
      { id: 5, nome: "KitKat", preco: 3 },
      { id: 6, nome: "Cones Trufados", preco: 15 }
]

var mocked_acompanhamentos_cafe_da_manha = [
      { id: 7, nome: "Manteiga", preco: 1 },
      { id: 8, nome: "Requeijão", preco: 1 },
      { id: 9, nome: "Geleia", preco: 1 },
      { id: 10, nome: "Fruta", preco: 5 },
]

var mocked_acompanhamentos_caixa_bar = [
      { id: 11, nome: "Maionese", preco: 1 },
      { id: 12, nome: "Limão", preco: 3 },
      { id: 13, nome: "Ketchup", preco: 1 },
      { id: 14, nome: "Mostarda", preco: 1 },
]

var mocked_aperitivos_cafe_da_manha = [
      { id: 15, nome: "Fatias de frios", preco: 2 },
      { id: 16, nome: "Croissant", preco: 3 },
      { id: 17, nome: "Queijo recheado", preco: 2 },
      { id: 18, nome: "Torrada", preco: 3 }
]

var mocked_aperitivos_caixa_bar = [
      { id: 18, nome: "Queijo", preco: 2 },
      { id: 19, nome: "Salame", preco: 5 },
      { id: 20, nome: "Amendoim", preco: 3 },
      { id: 21, nome: "Salgadinho", preco: 5 }
]

var mocked_bebidas = [
      { id: 22, nome: "Água", preco: 2 },
      { id: 23, nome: "Suco", preco: 5 },
      { id: 24, nome: "Vinho", preco: 12 },
      { id: 25, nome: "Cerveja", preco: 6 }
]
var mockedQuantidadeDeBebida = 2;

var mocked_tamanho = [ 
      { nome: "Pequena", preco: 20 },
      { nome: "Médio", preco: 30 },
      { nome: "Grande", preco: 50}
]

var app = new Vue({
      el: "#app",

      created() {
            this.acompanhamentosSelecionados = Array(this.acompanhamentos.length).fill(false);
            this.aperitivosSelecionados = Array(this.aperitivos.length).fill(false);
      },

      data: {
            erros: [],

            tipo_de_caixa: {
                  nome: "Festa na Caixa",
                  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum lobortis lobortis. Phasellus fermentum libero eu velit maximus, commodo dignissim ex tincidunt."
            },

            acompanhamentos: mocked_acompanhamentos_festa_na_caixa,
            acompanhamentosSelecionados: [],
            
            aperitivos: [],
            aperitivosSelecionados: [],

            bebidas: mocked_bebidas,
            bebida: mocked_bebidas[0].nome,
            bebidaData: mocked_bebidas[0],
            quantidadeDeBebida: mockedQuantidadeDeBebida,
            especifiqueBebida: "",

            tamanhos: mocked_tamanho,
            tamanho: mocked_tamanho[0].nome,
            tamanhoData: mocked_tamanho[0],

            cor: "",

            precoFinal: 0,
      },
      
      watch: {
            'tipo_de_caixa.nome': function (novoValor, valorAntigo) {
                        if(novoValor === "Festa na Caixa") {
                              this.acompanhamentos = mocked_acompanhamentos_festa_na_caixa;
                              this.aperitivos = [];
                        } else if(novoValor === "Café da Manhã") {
                              this.acompanhamentos = mocked_acompanhamentos_cafe_da_manha;
                              this.aperitivos = mocked_aperitivos_cafe_da_manha;
                        } else if(novoValor === "Caixa Bar") {
                              this.acompanhamentos = mocked_acompanhamentos_caixa_bar;
                              this.aperitivos = mocked_aperitivos_caixa_bar;
                        } else {
                              console.log("Um erro ocorreu!")
                        }

                        this.acompanhamentosSelecionados = Array(this.acompanhamentos.length).fill(false);
                        this.aperitivosSelecionados = Array(this.aperitivos.length).fill(false);
                  },

                  quantidadeDeBebida(novoValor, valorAntigo) {
                  if(novoValor < 0 || novoValor > 5 || novoValor === "") {
                        this.quantidadeDeBebida = mockedQuantidadeDeBebida;
                  }
            }
      },

      computed: {
            precoAcompanhamento() {
                  let precoAcompanhamentoTotal = 0;
                  for(let i = 0; i < this.acompanhamentosSelecionados.length; i++) {
                        if(this.acompanhamentosSelecionados[i])
                              precoAcompanhamentoTotal += this.acompanhamentos[i].preco;
                  }
                  return precoAcompanhamentoTotal;
            },
            precoAperitivo() {
                  let precoAperitivoTotal = 0;
                  for(let i = 0; i < this.aperitivosSelecionados.length; i++) {
                        if(this.aperitivosSelecionados[i])
                              precoAperitivoTotal += this.aperitivos[i].preco;
                  }
                  return precoAperitivoTotal;
            },
            precoBebida() {
                  return this.bebidaData.preco * this.quantidadeDeBebida;
            },
            precoTotal() {
                  this.precoFinal = this.precoAcompanhamento + this.precoAperitivo + this.precoBebida + this.tamanhoData.preco;
                  return this.precoFinal;
            }
      },

      methods: {
            selecionarTamanho() {
                  this.tamanhos.map(item => {
                        if(item.nome === this.tamanho) {
                              this.tamanhoData = item;
                        }
                  }) 
            },

            selecionarBebida() {
                  this.bebidas.map(item => {
                        if(item.nome === this.bebida) {
                              this.bebidaData = item;
                        }
                  }) 
            },

            adicionarAoCarrinho(e) {
                  this.erros = [];
                  let prodFinal = {};

                  prodFinal.tipo_de_caixa = this.tipo_de_caixa;
      
                  prodFinal.acompanhamentos = this.acompanhamentos;
                  prodFinal.acompanhamentosSelecionados = this.acompanhamentosSelecionados;
                  
                  prodFinal.aperitivos = this.aperitivos;
                  prodFinal.aperitivosSelecionados = this.aperitivosSelecionados;
      
                  prodFinal.bebidas = this.bebidas;
                  prodFinal.bebida = this.bebida;
                  prodFinal.bebidaData = this.bebidaData;
                  prodFinal.quantidadeDeBebida = this.quantidadeDeBebida;
                  prodFinal.especifiqueBebida = this.especifiqueBebida;
      
                  prodFinal.tamanhos = this.tamanhos;
                  prodFinal.tamanho = this.tamanho;
                  prodFinal.tamanhoData = this.tamanhoData;
      
                  prodFinal.cor = this.cor;

                  prodFinal.preco = this.precoFinal;

                  if(!this.especifiqueBebida) {
                        this.erros.push("Especifique a bebida.");
                  }

                  if(!this.cor) {
                        this.erros.push("Cor é necessária.");
                  }

                  if(this.erros.length !== 0) {
                        e.preventDefault();
                  } else {
                        console.log(prodFinal);
                        localStorage.setItem('personalizado', JSON.stringify(prodFinal));
                        alert("Adicionando ao carrinho...");
                        window.location.href = 'carrinho.html'
                  }
                        
            }
      }

})