const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
console.log(btn_c[0].children)

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")

caixa1.firstElementChild.innerHTML = "Palmeiras"

caixa1.children[1].innerHTML = "Teste"

console.log(c1_2.parentNode)