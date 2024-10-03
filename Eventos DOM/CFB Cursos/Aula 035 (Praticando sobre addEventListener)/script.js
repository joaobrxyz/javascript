const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evento)=>{
        el = evento.target
        el.classList.toggle('selecionado') // Toggle remove ou add classe
    })
})

btn.addEventListener("click",(evt)=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})