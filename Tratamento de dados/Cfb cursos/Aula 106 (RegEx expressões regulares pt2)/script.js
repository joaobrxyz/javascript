let nome = new String("Joãoooo Vitorrrrrr 1978")
let email = "joao@gmail.com.br"
let numeros = "1, 10, 100, 1000"
console.log(nome)

console.log(nome.match(/[a-g|h-z|ã|0-9]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig)) // Números
console.log(nome.match(/\s/ig)) // Espaços
console.log(nome.match(/\bJ/ig)) // DWORDS

// Quantificadores
console.log(numeros)
console.log(nome.match(/o+|r+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))