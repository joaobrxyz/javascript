function valor(select, valor) {
    let item = select.options
    for (let c = 0; c < item.length; c++) {
        if (item[c].value === valor.value) {
            return true
        }
    }
    return false
}
function add() {
    let num = Number(document.getElementById('num').value)
    let list = document.getElementById('list')
    let item = document.createElement('option')
    let res = document.getElementById('res')
    res.innerHTML = ''
    item.text = `Valor ${num} adicionado.`
    item.value = num
    if (valor(list, item) == true) {
        alert('Número já adicionado!')
    } else if (num > 100 || num < 1) {
        alert('Digite um número entre 1 e 100!')
    }else {
        list.appendChild(item)
    }
}
function finalizar() {
    let list = document.getElementById('list').options
    let res = document.getElementById('res')
    res.innerHTML = `<p>Ao todo, temos ${list.length} números cadastrados</p>`
    let maior = menor = list[0].value
    let soma = media = Number(0)
    for (c=0; c < list.length; c++) {
        if (maior < list[c].value) {
            maior = list[c].value
        }
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    for (c=0; c < list.length; c++) {
        if (menor > list[c].value) {
            menor = list[c].value
        }
    }
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    for (c=0; c < list.length; c++) {
        soma += Number(list[c].value)
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma/list.length}.</p>`
}