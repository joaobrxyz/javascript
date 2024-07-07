// 5! = 5*4*3*2*1 = 122=0

let n = 5
let fat = 1

while(n>=1) {
    fat *= n
    n--
}
console.log(fat)