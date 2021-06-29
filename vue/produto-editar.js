var app = new Vue({
      el: "#app",

      data: {
            erros: [],
            nome: "",
            preco: "",
            quantidade: "",
            descricao: "",
      },

      methods: {
            editar() {
                  this.erros = []

                  if (!this.nome)
                        this.erros.push("Digite o nome")

                  if (!this.preco)
                        this.erros.push("Digite o preço")

                  if (!this.quantidade)
                        this.erros.push("Digite a quantidade")

                  if (!this.descricao)
                        this.erros.push("Digite a descrição")

                  if(this.erros.length > 0)
                        console.log(this.erros)
                  
                  else if (!isNumber(this.preco))
                        this.erros.push("Preço inválido")
                        
                  else if (!isNumber(this.quantidade))
                        this.erros.push("Quantidade inválida")
                  
                  else                
                        alert("Produto editado!")
            }
      }
})

function isNumber(numero) {
      let numerotxt = String(numero)
      console.log(numero)
      for (let i = 0; i < numerotxt.length; i++) {
          let code = numerotxt.charCodeAt(i);
          console.log(numerotxt[i], numerotxt.charCodeAt(i))
          if (code <= 48 || code >= 57) {          
              numerotxt.value=""; 
              return false;
          }
      }
      return true;
  }