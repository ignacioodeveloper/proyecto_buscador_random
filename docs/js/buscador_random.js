



var contenido= document.querySelector('#contenido')

function traer() {

    // API RANDOMUSER.ME
    
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {

            console.log(data.results['0'])

        
            contenido.innerHTML = 
        // abrir con acento grave altGr + }   
        // los <> siempre van pegado al nombre o etiqueta <img "data">
        `
        <img src="${data.results['0'].picture.large}"
        width= "100px" class="img-fluid rounded" >
        
        <h1>Nombre: ${data.results['0'].name.first}</h1>
        <h1>Apellido: ${data.results['0'].name.last}</h1>

        <h1>Direccion: ${data.results['0'].location.street.name}  ${data.results['0'].location.street.number}</h1>

        `
        

        })



}
