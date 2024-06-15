function* cores(){ // Funçãp geradora
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)