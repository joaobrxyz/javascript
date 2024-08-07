const data = new Date()
const div_data = document.querySelector("#div_data")
const div_relogio = document.querySelector("#div_relogio")

let dia = data.getDate()
dia = dia <10 ? "0"+dia : dia
let mes = data.getMonth()
mes = mes <10 ? "0"+mes : mes
const data_resumida = `${dia}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_resumida

const relogio = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0"+hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0"+minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0"+segundo : segundo
    const hora_completa = `${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio,100)



// getDate() = Dia do mês
// getDay() = Dia da  semana (número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data