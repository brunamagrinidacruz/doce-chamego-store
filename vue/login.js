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
                              alert("Administrador logado com sucesso! Clique em Tela Inicial.")
                        } else if(this.usuario === "user" && this.senha === "user") {
                              localStorage.setItem("usuario", "user");
                              alert("Usuario logado com sucesso! Clique em Tela Inicial.")
                        } else {
                              this.erros.push("Usuário ou senha inválidos.");
                        }
                  }

            }
      }
})