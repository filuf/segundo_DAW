let str = "agustín márquez piña"; //declaro string

let arr = str.split(" "); //separo por espacios

console.log(arr); //muestro

arr = arr
    .map(elem => elem.charAt(0).toUpperCase() + elem.substring(1));
//uso la función map para que iterando en cada elemento del array
//de strings concatene la primera letra en mayúscula de cada 
//elemento, con el resto de la cadena de cada elemento

console.log(arr); //muestro