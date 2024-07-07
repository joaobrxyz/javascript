let valor = 0
console.log(valor)
function add(v){
    valor += v
}
add(10)
console.log(valor)
add(5)
console.log(valor)

console.log("\nFunção soma:")
function soma(n1=0, n2=0){
    let res
    res = n1 + n2
    return res
}
let resultado = soma(5,5)
console.log(resultado)