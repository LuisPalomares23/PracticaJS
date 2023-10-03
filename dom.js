//Acceder a los elementos del DOM
//Document Object Model

//Accediendo al H1 por ID
const titulo = document.getElementById('titulo');
console.log(titulo)

//Accediendo al H1 por CLASS
const subtitulo = document.getElementsByClassName('subtitulos');
console.log(subtitulo)

//Accediendo a elementos por su TAG 
const spans = document.getElementsByTagName('span');
console.log(spans.length)

//Metodos para modificar elementos del DOM

//Con TextContent se accede al contenido del tag HTML
console.log(titulo.textContent)

//Con InnerHTML se puede añadir contenido HTML a la etiqueta seleccionada

titulo.innerHTML = '<span>Soy un spam</span>'

//Con .ADD se añade el contendio a la clases pero como otra clase adicioanl

titulo.classList.add('nueva')

//.remove es para demover una clases
titulo.classList.remove('otra') 

//.Toggle segun tantas veces se llame va a añadir o a eliminar una clase

titulo.classList.toggle('dark')
titulo.classList.toggle('dark')
titulo.classList.toggle('dark')

//con .style se puede modificar los estilos de un elemento
titulo.style.backgroundColor = 'red'
titulo.style.fontWeight = 'bold'


//Crear y agregas elementos a la lista listaOrdenada

const lista = document.getElementById('listaOrdenada')
const boton = document.getElementById('agregar')

boton.addEventListener('click', () => {
    const etiqueta = document.createElement('li')
    etiqueta.textContent = "Nuevo elemento"
    lista.appendChild(etiqueta)
} )

//Eliminar elemento de la lista

const eliminar = document.getElementById('eliminar')
eliminar.addEventListener('click', () => {
    const primerElemento = lista.firstElementChild
    if (primerElemento){
        lista.removeChild(primerElemento)
    }
})

//Ejercicio de Login