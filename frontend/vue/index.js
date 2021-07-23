Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
}
  
Storage.prototype.getObject = function(key) {
      let value = this.getItem(key);
      try {
            return value && JSON.parse(value);      
      } catch(e) {
            localStorage.setObject("usuario", null);
            return null;
      }
}

var app = new Vue({
      el: '#app',
      
      data: {
            produto: "",
            produtos: [],
            todosProdutos: []
      },

      watch: {
            produto() {
                  if(this.produto === "") {
                        this.produtos = this.todosProdutos;
                  } else {
                        this.produtos = this.todosProdutos.filter((item) => {
                              return item.nome.toUpperCase().includes(this.produto.toUpperCase());
                        })
                  }
            }
      },

      methods: {
            adicionar_carrinho(item) {
                  const usuario = localStorage.getObject("usuario");
                  //Está logado
                  if(usuario !== null) {
                        if(usuario.ehAdministrador) {
                              alert("Entre como um cliente para adicionar ao carrinho!");
                              return;
                        }
                  } else { //Nao está logado
                        alert("Entre como um cliente para adicionar ao carrinho!");
                        window.location.href = 'login.html';
                        return;
                  }

                  //É cliente
                  let itens = []
                  let itensCarrinho = localStorage.getObject('itensCarrinho')
                  
                  let verificacao = 0
                  let tamItensCarrinho = 0
                  if (itensCarrinho !== null)
                        tamItensCarrinho = itensCarrinho.length

                  while (tamItensCarrinho > verificacao && itensCarrinho[verificacao]._id !== item._id)
                        verificacao++;
                  
                  if (verificacao !== tamItensCarrinho) {
                        alert('Este produto já está no carrinho.')
                  } else {
                        if (tamItensCarrinho !== 0)
                              itens = itensCarrinho
                        item.personalizacao = false;
                        itens.push(item)
                        localStorage.setObject('itensCarrinho', itens)
                        alert('Adicionado ao carrinho!')
                        window.location.href = 'carrinho.html'
                  }
            }
      },

      mounted() {
            this.$nextTick(function () {
                  fetch('http://localhost:3000/produto/EstoqueValido')
                  .then(response => {
                              // valida se a requisição falhou
                              if (!response.ok) {
                                    return new Error('falhou a requisição') // cairá no catch da promise
                              }

                              // verificando pelo status
                              if (response.status === 404) {
                                    return new Error('não encontrou qualquer resultado')
                              }

                              // retorna uma promise com os dados em JSON
                              return response.json()
                        })
                  .then(data => {
                        this.produtos = data;
                        this.todosProdutos = data;
                  })
                  .catch(err => console.log(err.message))
            })
      }

})