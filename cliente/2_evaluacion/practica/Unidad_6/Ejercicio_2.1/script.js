let segundos = 4;
const p = document.getElementById("mensaje");

const intervalo = setInterval( () => {
    if (segundos > 1) {
        p.textContent = "Cuenta atrás: " + segundos;
    } else if (segundos === 1) {
        p.textContent = "¡¡¡A TRABAJAR!!!";
    } else {
        window.location.href = "http://linkedin.com";
    }
    segundos--;
}, 1000);