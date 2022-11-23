let nombre = "Jonathan"

let apellido = "León"

let segundoApellido = "Riesgo"

let estudiante = `${nombre} ${apellido}`

console.log(estudiante)

console.log(estudiante.toUpperCase())

console.log(estudiante.toLowerCase())

let num_letras = estudiante.length

console.log(num_letras)

let primera_letra = nombre.charAt(0)

/*Otras formas de hacerlo

Todas válidas
    const inicialNombre = nombre[0]
    const inicialNombre = nombre.at(0)
    const inicialNombre = nombre.substring(0, 1)

*/

console.log(primera_letra)

let ultima_letra = apellido.charAt(3)

/*Otras formas de hacerlo 

Todas válidas
    const finalApellido = apellido[apellido.length - 1]
    const finalApellido = nombre.at(apellido.length - 1)
    const finalApellido = apellido.substring(apellido.length - 1, apellido.length)

*/

console.log(ultima_letra)

let elimina_espacio = estudiante.replace(" ","")

console.log(elimina_espacio)

let isEstudiante = estudiante.includes("Jonathan")

console.log(isEstudiante)