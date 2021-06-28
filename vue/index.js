var app = new Vue({
      el: '#app',
      
      data: {
            produtos: [
                  { 
                        nome: "Cones Trufados", 
                        descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Não fique sem saborear esses deliciosos cones trufados.", 
                        preco: 7.9, 
                        listaID: 1,
                        imagens: [
                              {
                                    caminho: "img/cone-trufado1.jpeg",
                                    slide: "slide1"
                              },
                              {
                                    caminho: "img/cone-trufado2.jpeg",
                                    slide: "slide2"
                              },
                              {
                                    caminho: "img/cone-trufado3.jpeg",
                                    slide: "slide3"
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
                  }
            ]
      }
})