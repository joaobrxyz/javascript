const url = document.querySelector("#url")
const btn_url = document.querySelector("#btn_url")

btn_url.addEventListener("click",()=>{
    // window.location.replace("https://google.com.br") // Deleta a URL corrente do histórico

    // window.location.assign("https://google.com.br") // NÃO deleta a URL corrente do histórico

    // window.location.reload() // Recarrega a página

    //window.history.back() // Volta pra página anterior de acordo com o histórico

    //window.history.forward() // // Vai pra próxima página de acordo com o histórico

    // window.history.go(1)

    //console.log(window.history.length)

    window.location = url.value
})