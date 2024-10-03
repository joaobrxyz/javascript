const btn_alert = document.querySelector("#btn_alert")
const btn_confirm = document.querySelector("#btn_confirm")
const btn_prompt = document.querySelector("#btn_prompt")

btn_alert.addEventListener("click", ()=>{
    alert("Palmeiras é o maior time do Brasil")
})

btn_confirm.addEventListener("click", ()=>{
    if (confirm("Vc está aprendendo muito?")){
        console.log("Botão OK pressionado")
    } else {
        console.log("Botão CANCELAR pressionado")
    }
})

btn_prompt.addEventListener("click", ()=>{
    const nome = prompt("Digite seu nome","Digite seu nome aqui")
    if(nome===null){
        console.log("Botão CANCELAR pressionado")
    } else {
        console.log(`Nome digitado: ${nome}`)
    }
})