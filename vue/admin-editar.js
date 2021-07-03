var app = new Vue({
    el: "#app",
    
    data: {
        erros: [],
        nome: "",
        cpf: "",
        email: "",
        endereco: "",
        telefone: "",
        cargo: "",
        senha: "",
        
        /* variável para fazer o teste de validação do email */
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    },
    
    methods: {
        editar() {
            this.erros = [];

            if (!this.nome)
                this.erros.push("Digite o nome")
            
            if (!this.cpf)
                this.erros.push("Digite o CPF")

            if (!this.email)
                this.erros.push("Digite o email")
            
            if (!this.endereco)
                this.erros.push("Digite o endereço")

            if (!this.telefone)
                this.erros.push("Digite o telefone")

            if (!this.cargo)
                this.erros.push("Digite o cargo")

            if (!this.senha)
                this.erros.push("Digite a senha")

            /*if (this.erros.length > 0)
                console.log(this.erros)*/
            
            else if (String(this.cpf).length !== 11 || !isNumber(this.cpf))
                this.erros.push("CPF inválido")

            else if (!this.reg.test(this.email))
                this.erros.push("Email inválido")

            else if (!isPhone(this.telefone))
                this.erros.push("Telefone inválido")
            
            else {
                alert("Usuário editado!")
                window.location.href = 'admin.html'
            }
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

function isPhone(telefone) {
    reg = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    return reg.test(telefone)
  }