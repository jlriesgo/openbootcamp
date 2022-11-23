const parrafos = document.querySelectorAll(".parrafo")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{        
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () =>{
        parrafo.classList.remove("dragging")
    })
})

const secciones = document.querySelectorAll(".seccion")

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
    })

    seccion.addEventListener("drop", event =>{
        //console.log("drop")
        const idParrafo = event.dataTransfer.getData("id")
        //console.log(idParrafo)
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})

