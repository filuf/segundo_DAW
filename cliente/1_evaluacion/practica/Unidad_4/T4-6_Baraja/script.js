/*

Crea un tipo de objeto que sirva para representar una Carta. Tendrá dos propiedades:

palo: un número de 1 a 4 (1 - oros; 2 - espadas; 3 - bastos; 4 - copas).
valor: un número del 1 al 10 (8 - sota; 9 - caballo; 10 - rey).
Los objetos de este tipo se construirán indicando el palo y el valor. Si hay fallos en los datos, se devuelve un objeto nulo en la creación.

Las cartas tendrán estos métodos:

darValor(): recibe un número de palo y un valor y los asigna a la carta. Si recibe datos incorrectos, no hace nada.
toString(): devuelve (no imprime) un texto que describe la carta (por ejemplo: As de Oros).


Crea otro tipo de objeto que sirva para representar una Baraja de cartas. Contendrá las siguientes propiedades:

cartas: array con las 40 cartas de una baraja.
Al construir la Baraja, se rellenan las cartas en el siguiente orden: por palos y, cada palo, con las cartas del 1 al 10.

Una baraja tendrá estos métodos:
barajar(): baraja las cartas, desordenándolas de forma aleatoria.
toString(): devuelve un texto con el orden en el que están las cartas dentro de la baraja.

Entregar el fichero como Baraja_NombreApellidos, si te llamas Jesús García Lopez, el fichero se llamará Baraja_JesusGarciaLopez.

*/ 

function Carta (palo, valor) {

    this.darValor = (palo, valor) => {

        if (isNaN(palo) || palo < 1 || palo > 4) {
            throw new Error("El palo debe ser un natural entre 1 y 4 (inclusive)");
        }
        if (isNaN(valor) || valor < 1 || valor > 10) {
            throw new Error("El valor debe ser un natural entre 1 y 10 (inclusive)");
        }
        
        //palo
        switch (palo) {
            case 1:
                this.palo = "oros";
                break;
            case 2:
                this.palo = "espadas";
                break;
            case 3:
                this.palo = "bastos";
                break;
            case 4:
                this.palo = "copas";
                break;
        }

        //valor
        switch (valor) {
            case 1:
                this.valor = "As";
                break;
            case 8:
                this.valor = "Sota";
                break;
            case 9:
                this.valor = "Caballo";
                break;
            case 10:
                this.valor = "Rey";
                break;
            default:
                this.valor = valor;
        }
    }

    this.toString = () => this.valor + " de " + this.palo;

    this.darValor(palo, valor);
}

function Baraja () {
    this.cartas = [];

    //i = palo, j = valor
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 10; j++) {
            this.cartas.push(new Carta(i, j));     
        }
    }

    this.toString = () => this.cartas.map(carta => carta.toString());
    
    this.barajar = () => {
        let aux;
        let pos;
        let pos2;

        for (let i = 0; i < this.cartas.length * 2; i++) {
            pos = Math.floor(Math.random() * (this.cartas.length));
            pos2 = Math.floor(Math.random() * (this.cartas.length));

            aux = this.cartas[pos];
            this.cartas[pos] = this.cartas[pos2];
            this.cartas[pos2] = aux;
        }
    }
}

const baraja = new Baraja;

console.log(baraja.toString());
console.log("barajamos");
baraja.barajar();
console.log(baraja.toString());