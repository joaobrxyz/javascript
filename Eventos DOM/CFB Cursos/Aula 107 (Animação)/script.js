const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")

const init = ()=>{
    carro.style = "position:relative;left:0px;"
}

btn_direita.addEventListener("click",()=>{
    let pos = parseInt(carro.style.left)
    pos += 10
    carro.style = `position:relative;left:${pos}px;`
})

btn_esquerda.addEventListener("click",()=>{
    carro.style.left = parseInt(carro.style.left) - 10 + "px"
})

window.onload = init