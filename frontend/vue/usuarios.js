Storage.prototype.getObject = function(key) {
      let value = this.getItem(key);
      return value && JSON.parse(value);
}

var app = new Vue({
    el: "#app",
    
    data: {
        usuarios: []
    },
    
    methods: {
            listarUsuarios() {
                  fetch('http://localhost:3000/usuario')
                  .then(response => {
                              if (!response.ok) {
                                    throw new Error("Ocorreu um erro!");
                              }
                              return response.json()
                        })
                  .then(data => {
                        this.usuarios = data;
                  })
                  .catch(err => {
                        console.log(err.message)
                        alert("Ocorreu um erro!");
                  })
            },

            excluir: function(id, email) {
                  const usuarioAtual = localStorage.getObject("usuario");
                  if(usuarioAtual.email === email) {
                        alert("Não é possível excluir o próprio usuário.");
                        return;
                  }

                  if (!confirm("Tem certeza que deseja excluir esse usuário?")) {
                        return;
                  }

                  fetch('http://localhost:3000/usuario/' + id,  {
                        method: 'DELETE',
                        headers: {
                              'Content-type': 'application/json; charset=UTF-8'
                        }
                  })
                  .then(response => {
                        if (!response.ok) {
                              throw new Error("Ocorreu um erro!");
                        }
                        return response.json();
                  })
                  .then(data => {
                        alert(data.mensagem); 
                        this.listarUsuarios();
                  })
                  .catch(err => {
                        console.log(err.message)
                        alert("Ocorreu um erro!");
                  })
            }
    },

    mounted() {
        this.$nextTick(function () {
              this.listarUsuarios();
        })
  }


})