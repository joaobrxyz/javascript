const v1 = document.querySelector("#v1")
const v2 = document.querySelector("#v2")
const res = document.querySelector("#res")

const soma = document.querySelector("#soma")
const sub = document.querySelector("#sub")
const mult = document.querySelector("#mult")
const divi = document.querySelector("#divi")

const op = [
    ()=>{
        res.innerHTML = Number(v1.value) + Number(v2.value)
    },
    ()=>{
        res.innerHTML = Number(v1.value) - Number(v2.value)
    },
    ()=>{
        res.innerHTML = Number(v1.value) * Number(v2.value)
    },
    ()=>{
        res.innerHTML = Number(v1.value) / Number(v2.value)
    },
]

soma.addEventListener("click", ()=>{op[0]()})
sub.addEventListener("click", ()=>{op[1]()})
mult.addEventListener("click", ()=>{op[2]()})
divi.addEventListener("click", ()=>{op[3]()})