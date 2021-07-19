var app = new Vue({
    el: "#app",
    
    data: {
        usuarios: []
    },
    
    methods: {
        excluir: function(indice) {
            this.usuarios.splice(indice, 1);
        }
    },

    mounted() {
        this.$nextTick(function () {
              fetch('http://localhost:3000/usuario')
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
                    this.usuarios = data;
              })
              .catch(err => console.log(err.message))
        })
  }


})