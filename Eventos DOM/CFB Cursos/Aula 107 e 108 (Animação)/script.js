const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const parar =  document.querySelector("#btn_parar")

const init = ()=>{
    carro.style = "position:relative;left:0px;"
}

let anima = null

const mover = (dir)=>{
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
}

btn_parar.addEventListener("click",()=>{
    clearInterval(anima)
})

btn_direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima = setInterval(mover, 20, 1);
})

btn_esquerda.addEventListener("click",()=>{
    clearInterval(anima)
    anima = setInterval(mover, 20, -1);
})

window.onload = init