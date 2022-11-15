let lista_compra = ["leche", "yogures","huevos","detergente","jamon de pavo"]

lista_compra.push("Aceite de girasol")

console.log(lista_compra)

lista_compra.pop()

console.log(lista_compra)

let peliculas_favoritas = [{
    titulo : "Aterriza como puedas",
    director : "Ken Finkleman",
    fecha : 1980
},
{
    titulo : "Vengadores: La era de Ultrón",
    director : "Joss Whedon",
    fecha : 2015
},
{
    titulo : "La lista de Schindler",
    director : "Steven Spielberg",
    fecha : 1993
}
]

let peliculasposteriores = peliculas_favoritas.filter( f => f.fecha > 2010)

console.log(peliculasposteriores)

let directores = peliculas_favoritas.map(d => d.director)

console.log(directores)

let titulos = peliculas_favoritas.map(t => t.titulo);

console.log(titulos)

let directores_titulos = directores.concat(titulos);

console.log(directores_titulos)

let directores_titulos_propag = [...titulos, ...directores]

console.log(directores_titulos_propag)
