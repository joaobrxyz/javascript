let nome = new String("João Vitor")
console.log(nome)

console.log(nome.search(/vitor/i)) // Ignora o uso do case sensitive

console.log(nome.match(/O/ig)) // Encontra todos caracteres dentro da string

console.log(nome.replace(/o/ig,"u"))