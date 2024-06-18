const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
let c = cursos.map((elemento,indice)=>{
    return "<div>"+elemento+"</div>"
})
console.log(c)