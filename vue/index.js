var app = new Vue({
      el: "#app",
      
      data: {
            produtos: [
                  { nome: "Cones Trufados", descricao: "Esse é o mais forte produto do nosso ramo, está conosco desde o primórdio. Não fique sem saborear esses deliciosos cones trufados.", preco: 7.9 },
                  { nome: "Café da Manhã", descricao: "Essa é uma cesta magnífica composta por todos os componentes de um belo café da manhã. Você irá se deliciar com tantas maravilhas.", preco: 69.9 },
                  { nome: "Quitutes", descricao: "Você está pensando em receber visita e não sabe o que oferecer de entrada? Quitutes da Doce Chamego, seus convidados irão amar!", preco: 49.9 },
                  { nome: "vinho e Petiscos", descricao: "Está afim de um momento romântico com alguém ou apenas curtir sozinho? Não deixe de ser acompanho por um bom vinho e deliciosos petiscos!", preco: 89.9 }
            ]
      }
})