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
    item.text = `Valor ${num} adicionado.`
    if (valor(list, item) == true) {
        alert('Número já adicionado!')
    } else {
        list.appendChild(item)
    }
}