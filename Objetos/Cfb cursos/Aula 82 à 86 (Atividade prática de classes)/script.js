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
    constructor(arrayBolas,palco){
        this.tam = Math.floor(Math.random()*15)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor(Math.random()*10000000000000)
        this.desenhar()
        this.eu = document.getElementById(this.id)
        this.controle = setInterval(this.controlar,10)
        numBolas ++
        num_objetos.innerHTML = numBolas
    }
    minhaPos = ()=>{
        return this.arrayBolas.indexOf(this)
    }

    remover = ()=>{
        clearInterval(this.controle)
        bolas = bolas.filter((el)=>{
            if(el.id!=this.id){
                return el
            }
        })
        this.eu.remove()
        numBolas --
        num_objetos.innerHTML = numBolas
    }

    desenhar = ()=>{
        const div = document.createElement("div")
        div.setAttribute("id",this.id)
        div.setAttribute("class","bola")
        div.setAttribute("style", `left: ${this.px}px; top: ${this.py}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b});`)
        this.palco.appendChild(div)
    }

    controle_bordas = ()=>{
        if(this.px + this.tam >= larguraPalco){
            this.dirx = -1
        } else if(this.px <= 0){
            this.dirx = 1
        }
        if(this.py + this.tam >= alturaPalco){
            this.diry = -1
        } else if(this.py <= 0){
            this.diry = 1
        }
    }
    controlar = ()=>{
        this.controle_bordas()
        this.px += this.dirx*this.velx
        this.py += this.diry*this.vely
        this.eu.setAttribute("style", `left: ${this.px}px; top: ${this.py}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b});`)
        if((this.px > larguraPalco) || (this.py > alturaPalco)){
            this.remover()
        }
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
        bolas.push(new Bola(bolas, palco))
    }
})

btn_remover.addEventListener("click",()=>{
    bolas.map((el)=>{
        // Removar a bolinha
        el.remover()
    })
})