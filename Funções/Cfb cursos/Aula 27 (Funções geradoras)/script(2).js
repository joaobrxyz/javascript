function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}.`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('João').value)
console.log(itp.next('Futebol').value)