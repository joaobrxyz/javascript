const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const parar =  document.querySelector("#btn_parar")
const rodar =  document.querySelector("#btn_rodar")

const init = ()=>{
    carro.style = "position:relative;left:0px;width:100px;height:40px;"
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
}

let anima = null
let tamMax = null
let tamCarro = null
let dir = 0

const mover = (dir)=>{ // Serve pros botões de esquerda e direita
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

const move = ()=>{ // Serve para o botão rodar
    if(parseInt(carro.style.left) >= tamMax){
        dir = -1
    } else if(parseInt(carro.style.left) <= 0){
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(move,20)
}

rodar.addEventListener("click",()=>{
    move()
})

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
window.addEventListener("keydown",(evt)=>{
    if(evt.code === "ArrowUp"){
        carro.style.width = parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
    }
    if(evt.code === "ArrowDown"){
        carro.style.width = parseInt(carro.style.width) - 10 + "px"
        carro.style.height = parseInt(carro.style.height) - 10 + "px"
    }
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
})