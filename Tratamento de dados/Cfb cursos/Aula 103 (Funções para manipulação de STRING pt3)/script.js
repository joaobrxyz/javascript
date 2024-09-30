let nome = new String("João Vitor")
let nome2 = new String("João Vitor")
let canal = new String("CFBCursos")

let parte1 = nome.substring(0,4) // retorna um pedaço da string
console.log(parte1)

let parte2 = nome.substr(0,4) // retorna um pedaço da string (não é utilizado mais)
console.log(parte2)

console.log(nome.toUpperCase()) // Converte tudo pra maiúsculo
console.log(nome.toLocaleUpperCase())

console.log(nome.toLowerCase()) // Converte tudo pra minúsculo
console.log(nome.toLocaleLowerCase())

console.log(nome.valueOf()) // Mostra o valor da string

let num = 10
num = num.toString()
console.log(typeof(num)) 
