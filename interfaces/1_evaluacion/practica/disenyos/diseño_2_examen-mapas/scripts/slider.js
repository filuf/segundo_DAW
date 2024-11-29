let imagenes = [
    {
        "url": "resources/spain_S16.png",
        "nombre": "Proyecto 01",
        "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
    {
        "url": "resources/Imperium_Alejandro_Magno.png",
        "nombre": "Proyecto 02",
        "descripcion": "Hola a todos este es el proyecto02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
    {
        "url": "resources/britain_imperium.png",
        "nombre": "Proyecto 03",
        "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"

    },
]


let atras = document.getElementById('back');
let adelante = document.getElementById('forward');
let imagen = document.getElementById('img');
let puntos = document.getElementById('points');
let texto = document.getElementById('text')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    //pasa de la primera a la última imagen
    if (actual == -1){ 
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    //pasa de la última a la primera imagen
    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}