let nombre = "Jonathan";

let apellido = "León"

let estudiante = `${nombre} ${apellido}`

console.log(estudiante)

console.log(estudiante.toUpperCase())

console.log(estudiante.toLowerCase())

let num_letras = estudiante.length;

console.log(num_letras)

let primera_letra = nombre.charAt(0)

console.log(primera_letra)

let ultima_letra = apellido.charAt(3);

console.log(ultima_letra)

let elimina_espacio = estudiante.replace(" ","");

console.log(elimina_espacio)

let isEstudiante = estudiante.includes("Jonathan");

console.log(isEstudiante)