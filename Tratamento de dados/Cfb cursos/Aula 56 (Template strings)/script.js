// Utilizando crase ao invés de aspas
const caixa = document.querySelector("#caixa")

const carros = ["Polo","Golf","T-Cross","HRV"]

let ul = `<ul>` 
carros.map((el)=>{
    ul += `<li> ${el}`
})
ul += `</ul`

const curso = "Javascript"
const canal = "CFB Cursos"
const frase = `Este é o curso de ${curso} do canal ${canal}`

caixa.innerHTML += frase
caixa.innerHTML += ul