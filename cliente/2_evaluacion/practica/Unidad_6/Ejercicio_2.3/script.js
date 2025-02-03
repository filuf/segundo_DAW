const findWord = () => {
    let { value: wordToFind } = document.getElementById("word");
    console.log(wordToFind);

    //si no se introduce nada
    if (!wordToFind.trim()) {
        alert("Por favor, ingresa una palabra para buscar.");
        return;
    }

    //alert es bloqueante pero la promesa mejora la legibilidad
    const promiseOccurrences = new Promise((resolve) => {
        setTimeout(() => {
            alert("Se calculará el número de veces que se muestra '" + wordToFind + "' en la página.");
            resolve();
        }, 3000);
    });

    const positionsOccurrences = [];
    let occurrences = 0;

    promiseOccurrences.then(() => {
        const arrayP = Array.from(document.getElementsByTagName("p"));

        // Buscar ocurrencias y registrar posiciones
        arrayP.forEach((paragraph) => {
            const text = paragraph.textContent;
            let charPos = 0;

            while (charPos !== -1) {
                charPos = text.indexOf(wordToFind, charPos);
                if (charPos !== -1) {

                    //Envuelve cada palabra en un span
                    paragraph.innerHTML = text.substring(0, charPos) +
                    "<span>" + text.substring(charPos, charPos + wordToFind.length) + "</span>" +
                    text.substring(charPos + wordToFind.length);

                    occurrences++;
                    // Guardar posición del párrafo
                    positionsOccurrences.push(paragraph.getBoundingClientRect().top + window.scrollY);
                    charPos += wordToFind.length;
                }
            }
        });

        console.log(`Ocurrencias: ${occurrences}`);
        alert(`El número de ocurrencias de la palabra "${wordToFind}" es de ${occurrences}`);

        // Desplazarse a cada ocurrencia
        const scrollToOccurrence = (index) => {
            if (index >= positionsOccurrences.length) {
                alert("Se completó el desplazamiento por todas las ocurrencias.");
                return; // Detener si ya terminamos
            }

            setTimeout(() => {
                window.scrollTo({
                    top: positionsOccurrences[index],
                    behavior: "smooth"
                });

                alert(`Desplazándonos a la ocurrencia ${index + 1} de ${occurrences}`);
                scrollToOccurrence(index + 1); // Llamada recursiva
            }, 2000);
        };

        if (occurrences > 0) scrollToOccurrence(0); // Iniciar desplazamiento
    });
};

// Agregar el evento al botón
let button = document.getElementById("button");
button.addEventListener("click", findWord);
