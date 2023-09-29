/* EJERCICIOS */

//1) Crea un Objeto que contenga información sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales (autor,año de publicación u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

let libros = {
    info : {titulo : 'Vuelven los fantasma',autor : 'Mercedes franco',anno : '2012',},
    info1 : {titulo : 'La piscologogia del exito',autor : 'Reeny Yagoseky', anno : '2017',},
    info2 : {titulo : 'Relaciones',autor : 'Mia Astral',anno : '2020',},
    info3 : {titulo : 'El cambio emocional', autor : 'Renny Yagosesky', anno : '2023',}
}

for(let i in libros){
    console.log(`El libro ${libros[i].titulo} fue escrito por ${libros[i].autor}`)
}
    

//2) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre y la ciudad de cada persona.

let personas = [
    {nombre:'Luis', edad:'23', ciudad:'Punto Fijo',},
    {nombre:'Victor', edad:'25', ciudad:'Amuay',},
    {nombre:'Riyerdi', edad:'34', ciudad:'Coro',},
]

for(persona of personas){
    console.log(`Mi nombre es ${persona.nombre} y vivo en ${persona.ciudad} `)
}


//3) Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero maximo de intentos. (Investigar Math.random).

//4) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parámetros (nombre y edad). La clase debe tener un método "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona. 

//5) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un parametro (curso). Agregar un metodo "presentar" a la clase "Estudiante" que incluya la información del nombre,edad y curso.
 
// 6) Crea una función que tome una cadena de texto y dos palabras como argumentos (parámetros), y reemplace todas las ocurrencias de la primera palabra con la segunda palabra.

//7) Escribe una función que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

//8) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "música, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 21, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos
  
//9) Agrega un ultimo elemento al array anterior con el nombre de "Paola" y la edad de 25 años

//10) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.

//11) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".