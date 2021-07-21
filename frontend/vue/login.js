Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
}

var app = new Vue({
      el: "#app",

      data: {
            erros: [],
            email: "",
            senha: "",
      },

      methods: {
            entrar() {
                  this.erros = [];

                  if(!this.email) {
                        this.erros.push("Digite o usuário.");
                  }

                  if(!this.senha) {
                        this.erros.push("Digite a senha.");
                  }

                  if(this.erros.length === 0) {
                        fetch('http://localhost:3000/usuario/authenticate', {
                              method: 'POST',
                              headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                              },
                              body: JSON.stringify({
                                    email: this.email,
                                    senha: this.senha
                              })
                        })
                        .then(response => {
                              if(response.status === 403) {
                                    this.erros.push("Usuário ou senha inválidos.");
                                    throw new Error("Usuário ou senha inválidos.");
                              }

                              if (!response.ok) {
                                    this.erros.push("Ocorreu um erro!");
                                    throw new Error("Ocorreu um erro!");
                              }

                              return response.json()
                        })
                        .then(data => {
                              localStorage.setObject("usuario", {
                                    email: this.email,
                                    ehAdministrador: data.ehAdministrador
                              });
                              window.location.href = 'index.html';
                        })
                        .catch(err => {
                              console.log(err.message);
                        })
                  }

            }
      }
})