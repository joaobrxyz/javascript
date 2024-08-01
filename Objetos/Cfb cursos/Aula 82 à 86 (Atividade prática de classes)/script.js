const palco = document.querySelector("#palco")
const num_objetos = document.querySelector("#num_objetos")
const txt_qtde = document.querySelector("#txt_qtde")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBolas = 0

class Bola {
    constructor(){
        this.tam = Math.floor(Math.random()*15)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))
    }
}

window.addEventListener("resize",()=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click",()=>{
    const qtde = txt_qtde.value
    for(let i = 0; i<qtde; i++){
        // Instanciar novas bolinhas
    }
})

btn_remover.addEventListener("click",()=>{
    bolas.map((el)=>{
        // Removar a bolinha
    })
})