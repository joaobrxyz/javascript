var time = new Date()
        var hora = document.getElementById('hora')
        var imagem = document.getElementById('imagem')
        if (time.getHours() == 1) {
            hora.innerHTML = `Agora é ${time.getHours()} hora.` 
        } else {
            hora.innerHTML = `Agora são ${time.getHours()} horas.`
        }
        if (time.getHours() > 5 && time.getHours < 12) {
            imagem.innerHTML = '<img src="imagens/dia.jpg" alt="Dia">'
            document.body.style.background = 'rgb(255, 208, 122)'
        } else if (time.getHours() >= 12) {
            imagem.innerHTML = '<img src="imagens/tarde.jpeg" alt="Tarde">'
            document.body.style.background = 'rgb(184, 97, 46)'
        } else {
            imagem.innerHTML = '<img src="imagens/noite.jpeg" alt="Noite">'
            document.body.style.background = 'rgb(142, 140, 140)'
        }