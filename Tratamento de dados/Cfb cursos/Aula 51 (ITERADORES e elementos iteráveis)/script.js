const valores = [10, 8, 9, 2]
const it_valores = valores[Symbol.iterator]()

const texto = "Youtube"
const it_texto = texto[Symbol.iterator]()

console.log(texto)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())

// Coleções iteráveis:
// Array
// String
// Map
// Sets