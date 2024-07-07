function contar() {
    i = Number(document.getElementById('inicio').value)
    f = Number(document.getElementById('fim').value)
    p = Number(document.getElementById('passo').value)
    res = document.getElementById('res')
    res.innerHTML = '<p>Contando:</p>'
    if (f < i) {
        // Contagem regressiva
        for (i; i >= f; i-=p) {
            res.innerHTML += `<span>${i} 👉 </span>`
        }
    } else if (p > f || p === '' || f === '' || i === "") {
        res.innerHTML += '<p>Impossível contar</p>'
    } else if (p == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        p = 1
        for (i; i <= f; i+=p) {
            res.innerHTML += `<span>${i} 👉 </span>`
        }
        res.innerHTML += '🏁'
    } else {   
        // Contagem crescente
        for (i; i <= f; i+=p) {
            res.innerHTML += `<span>${i} 👉 </span>`
        }
        res.innerHTML += '🏁'
    }   
}