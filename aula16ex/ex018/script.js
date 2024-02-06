function add() {
    let num = Number(document.getElementById('num').value)
    let list = document.getElementById('list')
    let item = document.createElement('option')
    item.text = `Valor ${num} adicionado.`
    list.appendChild(item)
}