

let datos = [{
    nombre: "Jonathan",
    apellido: "León",
    edad: 39,
    isDeveloper: true
}]

let propiedad = "edad"

console.log(datos[propiedad])

let mejores_amigos = [
    {
        nombre: "Vladimir",
        apellido: "Alexander",
        edad: 18,
        isDeveloper: false
    },
    {
        nombre: "Sandra",
        apellido: "Anta",
        edad: 34,
        isDeveloper: true
    }

]


let lista3 = datos.concat(mejores_amigos)

/*lista4 = [...datos,...mejores_amigos]*/

console.log(lista3)



let listaOrdenada = lista3.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)

