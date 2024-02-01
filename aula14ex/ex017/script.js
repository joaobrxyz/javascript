function tabuada() {
    var n = String(document.getElementById('num').value)
        res = document.getElementById('res')
    if (n == '') {
        alert('Por favor, digite um número!')
    } else {
        for (c=1; c<=10; c++) {
            res.innerHTML += `<li>${n} x ${c} = ${n*c}</li>`}
    }    
} 