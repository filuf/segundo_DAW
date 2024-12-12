let persona = {
  nombre: {
      pila: 'Jane',
      apellido: 'Doe'
  },
  edad: 30,
  genero: 'femenino',
  intereses: ['programación', 'teatro'],
  bio: function () {
    document.write(this.nombre.pila + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  },
  saludo: function() {
    alert('Hola, soy '+ this.nombre.pila + '. ');
  }
};
// Acceso a propiedades

/*
  persona.nombre.pila
  persona.edad
  persona.intereses[1]
  persona.bio()
  persona.saludo()

  console.log(persona);
*/

function Persona(nombrePila, apellido, edad, genero, ...intereses) {

  this.nombre = {
    pila: nombrePila,
    apellido: apellido
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;

  //he adaptado la función bio para que reciba n argumentos sin problema
  this.bio = () => {
    let str = this.nombre.pila + " tiene " + this.edad + " años. ";
    if (intereses.length == 0) {
      str += "No le gusta nada";
    } else {
      str += "Le gusta ";
      for (let index = 0; index < intereses.length; index++) {
        str += intereses[index];
        if (index < intereses.length - 2) {
          str += ", ";
        } else if (index == intereses.length - 2) {
          str += " y ";
        }
      }
    }

    document.write(str + ".");
  }

  this.saludo = () => {
    alert("Hola, soy " + this.nombre.pila + ".");
  }
}

let persona2 = new Persona("Jane", "Doe", 35, "femenino", "el betis", "ir al cine", "Roberto");

persona2.bio();
persona2.saludo();

console.log(persona2);

