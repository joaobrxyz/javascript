function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex =document.getElementsByName('gênero')
        var idade = ano - Number(fano.value)
        if (fsex[0].checked) {
            res.style.textAlign = 'center'
            if (idade < 6) {
                res.innerHTML = `<p>Detectamos um homem com ${idade} anos.</p> <img src="imagens/bebe-m.png" alt="Bebê masculino">`
            } else if (idade < 13) {
                res.innerHTML = `<p>Detectamos um homem com ${idade} anos.</p> <img src="imagens/crianca-m.png" alt="Menino">`
            } else if (idade < 26) {
                res.innerHTML = `<p>Detectamos um homem com ${idade} anos.</p> <img src="imagens/jovem-m.png" alt="Homem jovem">`
            } else if (idade < 60) {
                res.innerHTML = `<p>Detectamos um homem com ${idade} anos.</p> <img src="imagens/adulto.png" alt="Adulto">`
            } else if (idade == ano) {
                res.innerHTML = `<p>Detectamos um homem com ${idade} anos.</p> <img src="imagens/jesus.png" alt="Jesus">`
            } else {
                res.innerHTML = `<p>Detectamos um homem com ${idade} anos.</p> <img src="imagens/idoso.png" alt="Idoso">`
            }
         } else {
                res.style.textAlign = 'center'
                if (idade < 6) {
                    res.innerHTML = `<p>Detectamos uma mulher com ${idade} anos.</p> <img src="imagens/bebe-f.png" alt="Bebê feminino">`
                } else if (idade < 13) {
                    res.innerHTML = `<p>Detectamos uma mulher com ${idade} anos.</p> <img src="imagens/crianca-f.png" alt="Menina">`
                } else if (idade < 26) {
                    res.innerHTML = `<p>Detectamos uma mulher com ${idade} anos.</p> <img src="imagens/jovem-f.png" alt="Mulher jovem">`
                } else if (idade < 60) {
                    res.innerHTML = `<p>Detectamos uma mulher com ${idade} anos.</p> <img src="imagens/adulta.png" alt="Adulta">`
                } else {
                    res.innerHTML = `<p>Detectamos uma mulher com ${idade} anos.</p> <img src="imagens/idosa.png" alt="Idosa">`
            }
        }
    }
}
