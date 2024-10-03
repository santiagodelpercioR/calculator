function sum(array){   // Recibe un array de numeros y devuelve la suma
    return array.reduce((partialSum, a) => partialSum + a, 0);
}

function substract(array){
    return array.slice(1).reduce((acum, actualValue) => acum - actualValue, array[0]);
}

function multiply(array){
    return array.reduce((acum,actualValue) => acum * actualValue, 1);
}

function divide(array){
    return array.slice(1).reduce((acum,actualValue) => acum / actualValue, array[0]);
}

function operate(operator,num1,num2){
    switch(operator){
        case 'suma':
            return sum([num1,num2]);
            break;
        case 'resta':
            return substract([num1,num2]);
            break;
        case 'multiply':
            return multiply([num1,num2]);
            break;
        case 'divide':
            return divide([num1,num2]);
            break;
    }
}

function populate(){

}

let firstNumber;
let operator;
let secondNumber;