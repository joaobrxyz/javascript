let nome = new String("João Vitor")

console.log(nome.startsWith("J")) // Verifica o começo da string

console.log(nome.endsWith("Vitor")) // Verifica o fim da string

console.log(nome.includes("teste")) // Verifica se tem uma sentença na string

console.log(nome.repeat(4)) // Repete a string

console.log(nome.charCodeAt(0)) // Mostra o código do caractere
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))

console.log(String.fromCodePoint(74,111,227,111)) // Converte o código do caractere no caractere

let nome_ts = "João"

console.log(`Nome: ${nome_ts}`) // Template string