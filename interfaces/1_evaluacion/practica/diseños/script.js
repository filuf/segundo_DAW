const backendCheck = document.getElementById("backend-checkbox");
const frontedCheck = document.getElementById("frontend-checkbox");

const cartas = document.querySelectorAll(".carta-container"); //coge todos los elementos de la clase

function filtrar() {
    cartas.forEach( carta => {
        //predicados
        const esBack = carta.classList.contains("backend");
        const esFront = carta.classList.contains("frontend");

        //mostrar ocultar
        if((backendCheck.checked && esBack) || (frontedCheck.checked && esFront)) {
            carta.style.display = "flex";
        } else {
            carta.style.display = "none";
        }

        //muestra todas cuando ninguna casilla está seleccionada
        if (!backendCheck.checked && !frontedCheck.checked) {
            carta.style.display = "flex";
        }
    });
}

//la función se ejecuta cuando se pulsa el botón
backendCheck.addEventListener("change", filtrar);
frontedCheck.addEventListener("change", filtrar);