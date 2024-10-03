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

function populate(contenido){
    const display = document.querySelector(".display input");

    display.value = contenido;
}

function listeners(){
    const buttons = document.querySelectorAll(".wrapper button");
    const arrayButtons = Array.from(buttons);
    console.log(arrayButtons);

    arrayButtons.forEach((button) => 
        button.addEventListener('click', () => {
            console.log(button.textContent);
            populate(button.textContent);
        })
    );
}

let firstNumber;
let operator;
let secondNumber;
let displayValue;

listeners();