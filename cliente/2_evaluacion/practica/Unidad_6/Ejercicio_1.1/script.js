let { length: enlacesTotales } = document.getElementsByTagName("a");
let tercerP = document.getElementsByTagName("p")[2];
let { length: enlacesTercerP } = tercerP.getElementsByTagName("a");

console.log("Numero de párrafos = ", enlacesTotales);
console.log("Numero de parrafos en el tercer P -> ", enlacesTercerP);

//-----parte 2-----

let div = document.getElementById("enlaces");
let { innerHTML: contenido } = div;

div.innerHTML = `${contenido}
<p>Numero de enlaces totales = ${enlacesTotales}<br>
Numero de enlaces tercer p = ${enlacesTercerP}`;