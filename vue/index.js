let mockedProdutos = [
      { 
            nome: "Caixa de Cones Trufados", 
            descricao: "Este kit é composto por SEIS cones trufados estilo gourmet, todos os cones possuem uma guloseima no topo e você tem 10 opções de recheios disponíveis que podem compor seu presente.", 
            preco: 50.0, 
            listaID: 1,
            imagens: [
                  {
                        caminho: "img/cone-trufado1.jpeg",
                        slide: "slide1",
                        checked: true
                  },
                  {
                        caminho: "img/cone-trufado2.jpeg",
                        slide: "slide2",
                        checked: false,
                  },
                  {
                        caminho: "img/cone-trufado3.jpeg",
                        slide: "slide3",
                        checked: false
                  },
            ],
      },
      { 
            nome: "Café da Manhã", 
            descricao: "Essa é uma cesta magnífica composta por todos os componentes de um belo café da manhã. Você irá se deliciar com tantas maravilhas.", 
            preco: 69.9,
            listaID: 2,
            imagens: [
                  {
                        caminho: "img/cafe-da-manha1.jpeg",
                        slide: "slide4"
                  },
                  {
                        caminho: "img/cafe-da-manha2.jpeg",
                        slide: "slide5"
                  },
                  {
                        caminho: "img/cafe-da-manha3.jpeg",
                        slide: "slide6"
                  },
            ],
      },
      { 
            nome: "Quitutes", 
            descricao: "Você está pensando em receber visita e não sabe o que oferecer de entrada? Quitutes da Doce Chamego, seus convidados irão amar!", 
            preco: 49.9, 
            listaID: 3,
            imagens: [
                  {
                        caminho: "img/quitutes1.jpeg",
                        slide: "slide7"
                  },
                  {
                        caminho: "img/quitutes2.jpeg",
                        slide: "slide8"
                  },
                  {
                        caminho: "img/quitutes3.jpeg",
                        slide: "slide9"
                  },
            ],
      },
      { 
            nome: "Vinho e Petiscos", 
            descricao: "Está afim de um momento romântico com alguém ou apenas curtir sozinho? Não deixe de ser acompanho por um bom vinho e deliciosos petiscos!", 
            preco: 89.9,
            listaID: 4,
            imagens: [
                  {
                        caminho: "img/vinho-e-petiscos1.jpeg",
                        slide: "slide10"
                  },
                  {
                        caminho: "img/vinho-e-petiscos2.jpeg",
                        slide: "slide11"
                  },
                  {
                        caminho: "img/vinho-e-petiscos3.jpeg",
                        slide: "slide12"
                  },
            ],
      },
      { 
            nome: "Cone Trufado (Maracuja)", 
            descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Descubra este novo sabor!", 
            preco: 7.9, 
            listaID: 5,
            imagens: [
                  {
                        caminho: "img/cone-trufado1.jpeg",
                        slide: "slide13"
                  },
                  {
                        caminho: "img/cone-trufado2.jpeg",
                        slide: "slide14"
                  },
                  {
                        caminho: "img/cone-trufado3.jpeg",
                        slide: "slide15"
                  },
            ],
      },
      { 
            nome: "Cone Trufado (Leite Ninho)", 
            descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Descubra este novo sabor!", 
            preco: 7.9, 
            listaID: 6,
            imagens: [
                  {
                        caminho: "img/cone-trufado1.jpeg",
                        slide: "slide16"
                  },
                  {
                        caminho: "img/cone-trufado2.jpeg",
                        slide: "slide17"
                  },
                  {
                        caminho: "img/cone-trufado3.jpeg",
                        slide: "slide18"
                  },
            ],
      },
      { 
            nome: "Cone Trufado (Nutella)", 
            descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Descubra este novo sabor!", 
            preco: 7.9, 
            listaID: 7,
            imagens: [
                  {
                        caminho: "img/cone-trufado1.jpeg",
                        slide: "slide19"
                  },
                  {
                        caminho: "img/cone-trufado2.jpeg",
                        slide: "slide20"
                  },
                  {
                        caminho: "img/cone-trufado3.jpeg",
                        slide: "slide21"
                  },
            ],
      },
      { 
            nome: "Cone Trufado (Brigadeiro)", 
            descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Descubra este novo sabor!", 
            preco: 7.9, 
            listaID: 8,
            imagens: [
                  {
                        caminho: "img/cone-trufado1.jpeg",
                        slide: "slide22"
                  },
                  {
                        caminho: "img/cone-trufado2.jpeg",
                        slide: "slide23"
                  },
                  {
                        caminho: "img/cone-trufado3.jpeg",
                        slide: "slide24"
                  },
            ],
      }
];

var app = new Vue({
      el: '#app',
      
      data: {
            produto: "",
            produtos: mockedProdutos
      },

      watch: {
            produto() {
                  if(this.produto === "") {
                        this.produtos = mockedProdutos;
                  } else {
                        this.produtos = mockedProdutos.filter((item) => {
                              return item.nome.toUpperCase().includes(this.produto.toUpperCase());
                        })
                  }
            }
      }
})