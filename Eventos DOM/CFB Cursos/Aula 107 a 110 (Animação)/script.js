const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const parar =  document.querySelector("#btn_parar")

const init = ()=>{
    carro.style = "position:relative;left:0px;width:100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null

const mover = (dir)=>{
    if(dir > 0) {
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover,20,dir)
        } else {
            clearTimeout(anima)
        }
    } else if (dir < 0) {
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover,20,dir)
        } else {
            clearTimeout(anima)
        }
    }
}

btn_parar.addEventListener("click",()=>{
    // clearInterval(anima)
    clearTimeout(anima)
})

btn_direita.addEventListener("click",()=>{
    // clearInterval(anima)
    // anima = setInterval(mover, 20, 1);
    clearTimeout(anima)
    mover(1)
})

btn_esquerda.addEventListener("click",()=>{
    // clearInterval(anima)
    // anima = setInterval(mover, 20, -1);
    clearTimeout(anima)
    mover(-1)
})

window.onload = init
window.addEventListener("resize",()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
})