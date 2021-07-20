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
                  usuario = localStorage.getItem("usuario")
                  if (usuario !== "user") {
                        alert("Entre como um cliente para adicionar ao carrinho!")
                        if (usuario != "admin") window.location.href = 'login.html'
                  } else {
                        localStorage.setItem('item', JSON.stringify(item))
                        console.log(item.nome);
                        alert("Adicionado ao carrinho!")
                        window.location.href = 'carrinho.html'
                  }
            }
      },

      mounted() {
            this.$nextTick(function () {
                  fetch('http://localhost:3000/produto')
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