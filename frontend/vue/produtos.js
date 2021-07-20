var app = new Vue({
    el: "#app",
    
    data: {
        produtos: []
    },
    
    methods: {
      editar: function(id) {
            localStorage.setItem("produtoEditar", id);
            window.location.href = 'produto-editar.html'
      },
      
      excluir: async function(id) {
            try {
                  console.log(id)
                  let resp = await fetch('http://localhost:3000/produto/' + id, {
                        method: 'DELETE',
                        headers: {
                              'Content-type': 'application/json; charset=UTF-8'
                        }
                  })

                  resp = await resp.json()
                  alert(resp.mensagem)
            } catch (e) {
                  alert("Error: " + e)
            }
            window.location.href = 'produtos.html'
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
              })
              .catch(err => console.log(err.message))
        })
  }
})