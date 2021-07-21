Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
}
  
Storage.prototype.getObject = function(key) {
      let value = this.getItem(key);
      return value && JSON.parse(value);
}

Vue.component('menu_superior', {
      data: function() {
            return {
                  usuario: localStorage.getObject("usuario")
            }
      },

      props: {
            paginas: Array
      },

      methods: {
            usuarioEstaLogado() {
                  return this.usuario !== null;
            },

            sair() {
                  localStorage.setObject("usuario", null);
                  window.location.href = 'index.html'
            },

            mostrarAba(pagina) {
                  const administrativo = "administrativo";
                  const cliente = "cliente";
                  const visitante = "visitante"; //Não-logado
                  const visitante_cliente_administrativo = "visitante_cliente_administrativo";

                  let mockedTelas = [
                        { caminho: "cadastro.html", tipo: visitante},
                        { caminho: "carrinho.html", tipo: cliente},
                        { caminho: "index.html", tipo: visitante_cliente_administrativo},
                        { caminho: "login.html", tipo: visitante},
                        { caminho: "personalizacao.html", tipo: cliente},
                        { caminho: "produto-cadastrar.html", tipo: administrativo},
                        { caminho: "produto-editar.html", tipo: administrativo},
                        { caminho: "produtos.html", tipo: administrativo},
                        { caminho: "usuario-cadastro.html", tipo: administrativo},
                        { caminho: "usuario-editar.html", tipo: administrativo},
                        { caminho: "usuarios.html", tipo: administrativo},
                  ]
            
                  //Buscando na litta de telas qual foi a tela passada como argumento
                  let mockedTela = {};
                  for(let i = 0; i < mockedTelas.length; i++) {
                        if(mockedTelas[i].caminho === pagina.caminho) {
                              mockedTela = mockedTelas[i];
                              break;
                        }
                  }

                  //Qualquer pessoa possui acesso
                  if(mockedTela.tipo === visitante_cliente_administrativo) {
                        return true;
                  }

                  //Se o usuário não está logado, retorna a página apenas se for para usuários não logados
                  if(!this.usuarioEstaLogado()) {
                        return (mockedTela.tipo === visitante);
                  }

                  //Se o usuario for do tipo administrador
                  if(this.usuario.ehAdministrador) {
                        //Retorna a página apenas se ela for para administrador
                        return (mockedTela.tipo === administrativo);
                  } else { //Se o usuario não for do tipo administrador, ou seja, for do tipo cliente
                        //Retorna a página apenas se ela for para cliente
                        return (mockedTela.tipo === cliente);
                  }
            }
      },
      template: '<div><link href="/css/style.css" rel="stylesheet"><header id="cabecalho" class="session text-right"><a href="index.html"><img id="header-image" class="inline-block" src="img/logos/logo-e-nome.jpeg" alt="Doce Chamego"></a><div class="botoes-cabecalho"><a v-for="(pagina) in paginas" v-if="mostrarAba(pagina)" class="menu" v-bind:href="pagina.caminho">{{ pagina.nome }}</a> <a v-if="usuarioEstaLogado()" class="menu" v-on:click.prevent.stop="sair()">Sair</a></div></header></div>'
})