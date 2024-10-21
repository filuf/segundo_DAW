const objetos = [
    {
        nombre : "Aitor",
        apellido : "Pascual",
        edad : 20
    },
    {
        nombre : "Marta",
        apellido : "López",
        edad : "vieja"
    }
];

const anonima = new Promise((resolve, reject) => {
    setTimeout ( () => {
        console.log("hola");
        if (objetos)
            resolve(objetos);
        else
            reject("[!] Hay un error");
    }, 1500);
});

anonima.then(mensajeBueno => {
    console.log(mensajeBueno);
});

