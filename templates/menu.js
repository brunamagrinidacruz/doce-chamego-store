Vue.component('menu_superior', {
      data: function() {
            return {
                  usuario: localStorage.getItem("usuario")
            }
      },
      props: {
            paginas: Array
      },
      methods: {
            sair() {
                  localStorage.setItem("usuario", "")
                  location.reload();
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
                        { caminho: "admin.html", tipo: administrativo},
                        { caminho: "cadastro.html", tipo: usuario},
                        { caminho: "carrinho.html", tipo: cliente},
                        { caminho: "index.html", tipo: usuario_cliente_administrativo},
                        { caminho: "login.html", tipo: usuario},
                        { caminho: "personalizacao.html", tipo: cliente},
                        { caminho: "produto-cadastrar.html", tipo: administrativo},
                        { caminho: "produto-editar.html", tipo: administrativo},
                        { caminho: "admin-usuarios.html", tipo: administrativo},
                        { caminho: "admin-cadastro.html", tipo: administrativo},
                        { caminho: "admin-editar.html", tipo: administrativo},
                  ]
            
                  let mockedTela = {};
                  for(let i = 0; i < mockedTelas.length; i++) {
                        if(mockedTelas[i].caminho === pagina.caminho) {
                              mockedTela = mockedTelas[i];
                              break;
                        }
                  }

                  if(mockedTela.tipo === usuario_cliente_administrativo)
                        return true;

                  if(this.usuario === "admin") {
                        if(mockedTela.tipo === administrativo )
                              return true;
                  } else if(this.usuario === "user") {
                        if(mockedTela.tipo === cliente) 
                              return true;
                  } else if(!this.usuarioEstaLogado()) {
                        if(mockedTela.tipo === usuario)
                              return true;
                  }

                  return false;
            }
      },
      template: '<div><link href="/css/style.css" rel="stylesheet"><header id="cabecalho" class="session text-right"><a href="index.html"><img id="header-image" class="inline-block" src="img/logos/logo-e-nome.jpeg" alt="Doce Chamego"></a><a v-for="(pagina) in paginas" v-if="mostrarAba(pagina)" class="menu" v-bind:href="pagina.caminho">{{ pagina.nome }}</a> <a v-if="usuarioEstaLogado()" class="menu" v-on:click.prevent.stop="sair()">Sair</a></header></div>'
})