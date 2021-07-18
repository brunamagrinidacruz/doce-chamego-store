var app = new Vue({
      el: "#app",

      data: {
            erros: [],
            usuario: "",
            senha: "",
      },

      methods: {
            entrar() {
                  this.erros = [];

                  if(!this.usuario) {
                        this.erros.push("Digite o usuário.");
                  }

                  if(!this.senha) {
                        this.erros.push("Digite a senha.");
                  }

                  if(this.erros.length !== 0) {
                        console.log(this.erros)
                  } else {
                        if(this.usuario === "admin" && this.senha === "admin") {
                              localStorage.setItem("usuario", "admin");
                              window.location.href = 'index.html'
                        } else if(this.usuario === "user" && this.senha === "user") {
                              localStorage.setItem("usuario", "user");
                              window.location.href = 'index.html'
                        } else {
                              this.erros.push("Usuário ou senha inválidos.");
                        }
                  }

            }
      }
})