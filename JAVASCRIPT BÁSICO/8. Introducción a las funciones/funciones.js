


function siempreTrue(){
    return true;
}

console.log(siempreTrue())

//Función asíncrona llamando a promesa

function miAsync(){
    setTimeout(() =>{
        miPromesa
        .then(() => console.log("Hola soy una promesa"))
        .catch(() => console.log("Error"))
    }, 5000)
}


const miPromesa = new Promise((resolve,reject) => {
    if(true){
        resolve()
    }else{
        reject()
    }
})

miAsync()


//Función generadora de pares automáticos

function* pares(){
    let numeroPar = Number.parseInt(Math.random()*100 / 2 ) * 2
    yield numeroPar;
}

let gen = pares();

console.log(gen.next())





