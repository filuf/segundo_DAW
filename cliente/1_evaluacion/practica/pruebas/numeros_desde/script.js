let variable = parseInt(Math.random()*13) + 7;

console.log(variable);

let num1 = prompt("numero 1 ->");
let num2 = prompt("numero 2 ->");

try {
    if (isNaN(num1) || isNaN(num2))
        throw new Error("TE HE PEDIDO 2 NÚMEROS, NO ME VACILES, VIVA EL BETIS");
    if (num1 == num2)
        alert("Son iguales")
    else
        alert("El mayor es -> " + ((num1 > num2) ? num1 : num2));
} catch (error) {
    alert(error);
}


