const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for(n in num){ // For in
    console.log(num[n])
}

for(i of num) { // For of
    console.log(i)
}

for(n in objs){ // For in
    console.log(n)
}

for(i of objs) { // For of
    console.log(i)
}