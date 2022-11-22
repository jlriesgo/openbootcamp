class Estudiante {
    #nombre
    constructor(nombre){
        this.#nombre = nombre;
        this.asignaturas = ['JavaScript','HTML','CSS']
    }

    obtenDatos(){
        console.log(`El nombre del alumno es ${this.#nombre} y sus asignaturas son ${this.asignaturas}`)
    }
    
}

const estudiante = new Estudiante('María')

estudiante.obtenDatos()