let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*for (let c = 0; c<=valores.length; c++) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}