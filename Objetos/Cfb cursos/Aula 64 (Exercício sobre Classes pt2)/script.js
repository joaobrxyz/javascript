class Carro { //Classe PAI / BASE
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro { // Classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if (this.municao > 0){
            this.municao--
        }
    }
}

const btn_add = document.querySelector("#btn_addCarro")
const radioM = document.querySelector("#f_tipoMilitar")
const radioN = document.querySelector("#f_tipoNormal")

const nome = document.querySelector("#f_nome")
const portas = document.querySelector("#f_portas")
const blindagem = document.querySelector("#f_blindagem")
const municao = document.querySelector("#f_municao")
let carros = []
const res = document.querySelector(".carros")

const removerCarro = (quem)=>{
    carros = carros.filter((el)=>{
        return el.nome != quem
    })
}

radioM.addEventListener("click",()=>{
    blindagem.value = 0
    municao.value = 0
    nome.value = ""
    portas.value = 0
    blindagem.disabled = false
    municao.disabled = false
    //remove.Attribute também funciona
})
radioN.addEventListener("click",()=>{
    blindagem.value = 0
    municao.value = 0
    nome.value = ""
    portas.value = 0
    blindagem.disabled = true
    municao.disabled = true
    //set.Attribute também funciona
})
const gerenciarExibicaoCarros = ()=>{
    res.innerHTML = ""
    carros.map((c)=>{
        const div = document.createElement("div")
        const btn_remove = document.createElement("button")
        btn_remove.innerHTML = "Remover"
        btn_remove.addEventListener("click",(evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })
        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)
        div.innerHTML = `Nome: ${c.nome}<br>`
        div.innerHTML += `Portas: ${c.portas}<br>`
        div.innerHTML += `Cor: ${c.cor}<br>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br>`
        div.innerHTML += `Munição: ${c.municao}<br>`
        div.appendChild(btn_remove)
        res.appendChild(div)
    })
    
}
btn_add.addEventListener("click",()=>{
    if (radioM.checked){
        let carro = new Militar(nome.value,portas.value,blindagem.value,municao.value)
        carros.push(carro)
    } else {
        let carro = new Carro(nome.value,portas.value)
        carros.push(carro)
    }
    gerenciarExibicaoCarros()
    blindagem.value = 0
    municao.value = 0
    nome.value = ""
    portas.value = 0
})
