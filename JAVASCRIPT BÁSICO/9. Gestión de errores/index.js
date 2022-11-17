const logger = require('./logger')


const miFunc = valor => {
    if(typeof valor === "number"){
        return 2 * valor;
    }
    throw new Error("El valor debe ser de tipo número")
}

const numeo = 10;

try {
    
    logger.info("Está ejecutándose de manera correcta")
    const doble = miFunc(numero)
    console.log(doble)
           
} catch (error) {
    logger.error(`Error de tipo ${error}`)
}