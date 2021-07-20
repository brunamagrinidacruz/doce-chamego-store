Vue.component('menu_superior', {
      data: function() {
            return {
                  usuario: localStorage.getItem("usuario"),
                  ehAdministrador: localStorage.getItem("ehAdministrador") !== null ? localStorage.getItem("ehAdministrador").toUpperCase() === 'TRUE' : false
            }
      },
      props: {
            paginas: Array
      },
      methods: {
            sair() {
                  localStorage.setItem("usuario", "");
                  localStorage.setItem("ehAdministrador", "");
                  window.location.href = 'index.html'
            },
            usuarioEstaLogado() {
                  return !(this.usuario === ""  || this.usuario === "undefined" || this.usuario == null) 
            },
            mostrarAba(pagina) {
                  const administrativo = "administrativo";
                  const cliente = "cliente";
                  const usuario = "usuario"; //Não-logado
                  const usuario_cliente_administrativo = "usuario_cliente_administrativo";

                  let mockedTelas = [
                        { caminho: "cadastro.html", tipo: usuario},
                        { caminho: "carrinho.html", tipo: cliente},
                        { caminho: "index.html", tipo: usuario_cliente_administrativo},
                        { caminho: "login.html", tipo: usuario},
                        { caminho: "personalizacao.html", tipo: cliente},
                        { caminho: "produto-cadastrar.html", tipo: administrativo},
                        { caminho: "produto-editar.html", tipo: administrativo},
                        { caminho: "produtos.html", tipo: administrativo},
                        { caminho: "usuario-cadastro.html", tipo: administrativo},
                        { caminho: "usuario-editar.html", tipo: administrativo},
                        { caminho: "usuarios.html", tipo: administrativo},
                  ]
            
                  let mockedTela = {};
                  for(let i = 0; i < mockedTelas.length; i++) {
                        if(mockedTelas[i].caminho === pagina.caminho) {
                              mockedTela = mockedTelas[i];
                              break;
                        }
                  }

                  if(mockedTela.tipo === usuario_cliente_administrativo) {
                        return true;
                  }

                  if(!this.usuarioEstaLogado()) {
                        return (mockedTela.tipo === usuario);
                  }

                  if(this.ehAdministrador) {
                        return (mockedTela.tipo === administrativo);
                  } else {
                        return (mockedTela.tipo === cliente);
                  }
            }
      },
      template: '<div><link href="/css/style.css" rel="stylesheet"><header id="cabecalho" class="session text-right"><a href="index.html"><img id="header-image" class="inline-block" src="img/logos/logo-e-nome.jpeg" alt="Doce Chamego"></a><div class="botoes-cabecalho"><a v-for="(pagina) in paginas" v-if="mostrarAba(pagina)" class="menu" v-bind:href="pagina.caminho">{{ pagina.nome }}</a> <a v-if="usuarioEstaLogado()" class="menu" v-on:click.prevent.stop="sair()">Sair</a></div></header></div>'
})