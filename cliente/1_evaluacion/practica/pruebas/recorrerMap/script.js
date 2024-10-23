let mapa = new Map([
    [1,"uno"],
    [2,"dos"],
    [3,"tres"],
    [4,"cuatro"]
]);

console.log(mapa);

mapa.forEach( (value, key) => {
    console.log("[+] Mi llave es : " + key 
        + " mi valor es : " + value);
});