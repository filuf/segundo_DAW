let enlaces = document.getElementsByTagName("a");
let {href: url} = enlaces[enlaces.length-2];

console.log(url);


// Versión 1

let array = [];
for (const enlace of enlaces) {
    array.push(enlace.href);
}

let numeroDeEnlaces = array.filter( enlace => enlace.includes("/wiki/ISBN")).length;

console.log(numeroDeEnlaces);

//versión 2

numeroDeEnlaces = Array.from(enlaces)
    .filter( enlace => enlace.href.includes("/wiki/ISBN"))
    .length;

console.log(numeroDeEnlaces);

//versión 3

let {length: numeroDeEnlaces2} = document.querySelectorAll(`a[href="/wiki/ISBN"]`);

console.log(numeroDeEnlaces2);
