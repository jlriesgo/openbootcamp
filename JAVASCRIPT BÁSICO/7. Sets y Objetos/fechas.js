let hoy = new Date()

console.log(hoy)

let fechaNac = new Date("1983 April, 08")

console.log(fechaNac)

let isTarde = hoy.getTime() > fechaNac.getTime()

console.log(isTarde)

let diaNac = fechaNac.getDate()

console.log(diaNac)

let mesNac = fechaNac.getMonth()+1;

console.log(mesNac)

let anyoNac = fechaNac.getFullYear()

console.log(anyoNac)