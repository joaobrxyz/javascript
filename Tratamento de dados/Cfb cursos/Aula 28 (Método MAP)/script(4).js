const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)