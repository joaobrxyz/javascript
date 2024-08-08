const cursos =  ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]

// const getAllCourses = ()=>{
//     return cursos
// }

export default function getAllCourses(){
        return cursos
    }
function getCurso(i_curso){
    return cursos[i_curso]
}

export {cursos,getCurso}
