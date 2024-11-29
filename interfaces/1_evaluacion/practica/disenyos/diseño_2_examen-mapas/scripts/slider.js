let imagenes = [
    {
        "url": "resources/spain_S16.png",
        "nombre": "Mapa de la península en el siglo XVI",
        "descripcion": "Este mapa muestra la península ibérica en el siglo XVI, un periodo clave en la historia de España, marcado por la expansión de los reinos ibéricos a través del descubrimiento de América y las primeras incursiones coloniales. El mapa refleja las fronteras políticas, los reinos existentes en ese momento y la situación geopolítica de la región."
    },
    {
        "url": "resources/Imperium_Alejandro_Magno.png",
        "nombre": "Imperio de Alejandro Magno",
        "descripcion": "Este mapa ilustra la vasta extensión del Imperio de Alejandro Magno, que abarcaba desde Grecia hasta el noroeste de la India. El imperio, creado en un corto periodo de tiempo, fue uno de los más grandes de la historia antigua, influenciando profundamente las culturas de Oriente Medio, Asia y Europa."
    },
    {
        "url": "resources/britain_imperium.png",
        "nombre": "Imperio Británico",
        "descripcion": "Este mapa muestra el alcance global del Imperio Británico en su apogeo, durante el siglo XIX y principios del siglo XX. En su máxima extensión, el imperio abarcaba vastas regiones de África, Asia, América y Oceanía, convirtiéndose en el imperio más extenso de la historia. El mapa refleja su influencia política, económica y cultural en todo el mundo."
    }
];



let atras = document.getElementById('back');
let adelante = document.getElementById('forward');
let imagen = document.getElementById('img');
let texto = document.getElementById('text');
let actual = 0;

atras.addEventListener('click', function(){
    actual -=1;

    //pasa de la primera a la última imagen
    if (actual == -1){ 
        actual = imagenes.length - 1;
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
})  
adelante.addEventListener('click', function(){
    actual +=1;

    //pasa de la última a la primera imagen
    if (actual == imagenes.length){
        actual = 0;
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
})  