function soma(...valores) { // Parâmetros rest
    let res = 0
    for (i of valores){
        res += i
    }
    return res
}
console.log(soma(1,2,3,4))