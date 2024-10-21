const A = 6, B = 2;
var operator;
operate(operator);


function chooseOperator() {
    console.log('Eligiendo operador...');
    operator = prompt('Indica la operación deseada escribiendo + , -, * o /', '+');
    console.log('La operación es ' + operator);
    operate();
}


function operate() {
    console.log('Operando...');
    switch (operator) {
        case '+':
            result = A + B;
            console.log('La suma es: ' + result);
            break;
        case '-':
            result = A - B;
            console.log('La diferencia es: ' + result);
            break;
        case '*':
            result = A * B;
            console.log('El producto es: ' + result);
            break;
        case '/':
            result = A / B;
            console.log('El cociente es: ' + result);
            break;
        default:
            chooseOperator();
    }
}
