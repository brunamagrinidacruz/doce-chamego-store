var app = new Vue({
      el: "#app",

      data: {
            erros: [],
            nome: "",
            preco: "",
            quantidade: "",
            descricao: "",
            fotos: [],
      },

      methods: {
            camposValidos() {
                  this.erros = []

                  if (!this.nome)
                        this.erros.push("Digite o nome")

                  if (!this.preco)
                        this.erros.push("Digite o preço")

                  if (!this.quantidade)
                        this.erros.push("Digite a quantidade")

                  if (!this.descricao)
                        this.erros.push("Digite a descrição")

                  if (!this.fotos[0] || !this.fotos[1] || !this.fotos[2])
                        this.erros.push("Preencha todos os campos de imagem")
                        
                  if (!isNumber(this.preco))
                        this.erros.push("Preço inválido")
                        
                  if (!isNumber(this.quantidade))
                        this.erros.push("Quantidade inválida")
                  
                  if (this.erros.length > 0)   
                        return false;
                  return true;
            },

            cadastrar: async function() {
                  if (this.camposValidos()){   
                        try {
                              let resp = await fetch('http://localhost:3000/produto', {
                                    method: 'POST',
                                    headers: {
                                          'Content-type': 'application/json; charset=UTF-8'
                                    },
                                    body: JSON.stringify({
                                          nome: this.nome,
                                          preco: this.preco,
                                          quantidadeEstoque: this.quantidade,
                                          quantidadeVendida: 0,
                                          descricao: this.descricao,
                                          fotos: this.fotos,
                                    })
                              })
            
                              resp = await resp.json()
                              alert(resp.mensagem)
                        } catch (e) {
                              alert("Error: " + e)
                        }
                        
                        window.location.href = 'produtos.html'
                  }
            }
      }
})

function isNumber(numero) {
      let numerotxt = String(numero)
      for (let i = 0; i < numerotxt.length; i++) {
          let code = numerotxt.charCodeAt(i);
          if (code < 48 || code > 57) {          
              numerotxt.value=""; 
              return false;
          }
      }
      return true;
  }