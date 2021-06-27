Vue.component('menu_superior', {
      props: {
            paginas: Array
      },
      template: '<div><link href="/css/style.css" rel="stylesheet"><header id="cabecalho" class="session text-right"><a href="index.html"><img id="header-image" class="inline-block" src="img/logos/logo-e-nome.jpeg" alt="Doce Chamego"></a><a v-for="(pagina) in paginas" class="menu" v-bind:href="pagina.caminho">{{ pagina.nome }}</a></header></div>'
})