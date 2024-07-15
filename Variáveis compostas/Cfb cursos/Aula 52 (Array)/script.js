const caixa = document.querySelector("#caixa")

let cores = ["azul", "verde", "vermelho", ["claro", "escuro", "médio"]]
let cursos = ["HTML", "CSS", "Javascript", cores]

cursos.push("C++") // Add no final
cursos.unshift("Python") // Add no ínicio

cursos.shift() // Tira do ínicio
cursos.pop() // Tira do final

console.log(cursos[3][3][0])

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
