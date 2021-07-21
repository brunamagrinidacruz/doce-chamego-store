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
                  if (!confirm("Tem certeza que deseja excluir esse produto?")) {
                        return;
                  }

                  let resp = await fetch('http://localhost:3000/produto/' + id, {
                        method: 'DELETE',
                        headers: {
                              'Content-type': 'application/json; charset=UTF-8'
                        }
                  })
                  resp = await resp.json()
                  alert(resp.mensagem)
            } catch (e) {
                  console.log(e);
                  alert("Ocorreu um erro!");
            }
            window.location.href = 'produtos.html'
        }
    },

    mounted() {
        this.$nextTick(function () {
              fetch('http://localhost:3000/produto')
              .then(response => {
                        if (!response.ok) {
                              throw new Error("Ocorreu um erro!");
                        }
                        return response.json();
              })
              .then(data => {
                    this.produtos = data;
              })
              .catch(err => {
                  console.log(err.message)
                  alert("Ocorreu um erro!");
              })
        })
  }
})