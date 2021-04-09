



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
        
        <p>Nombre: ${data.results['0'].name.first}
         Apellido: ${data.results['0'].name.last}</p>
        `


        })



}
