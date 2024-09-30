let nome = new String("João Vitor")
let nome2 = new String("João Vitor")
let canal = new String("CFBCursos")

console.log(nome.localeCompare(nome2)) // compara as strings
// retorno 0: são iguais
// retorno 1: primeira string é maior
// retorno -1: segunda string é maior

console.log(nome.replace("i","y")) // substituí um ou mais caracteres

console.log(nome.search("tor")) // Pesquisa a posição

let sobrenome = nome.slice(5, nome.length) // Pega um pedaço da string
console.log(sobrenome)

let arr_nome = nome.split(" ") // Separa a string em um array
console.log(arr_nome)