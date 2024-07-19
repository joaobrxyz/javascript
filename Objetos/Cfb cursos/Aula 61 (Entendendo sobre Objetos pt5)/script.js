const Pessoa = {
    nome:"",
    idade:"",
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    },
}

const btn_add = document.querySelector("#btn_add")

btn_add.addEventListener("click", ()=>{
    const name = document.querySelector("#f_nome")
    const age = document.querySelector("#f_idade")
    const res = document.querySelector(".res")
    Pessoa.setNome(name.value)
    Pessoa.setIdade(age.value)
    res.innerHTML = `Nome: ${Pessoa.getNome()}<br>Idade: ${Pessoa.getIdade()}`
})