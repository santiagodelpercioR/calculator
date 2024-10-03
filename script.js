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
        case '+':
            return sum([num1,num2]);
            break;
        case '-':
            return substract([num1,num2]);
            break;
        case 'x':
            return multiply([num1,num2]);
            break;
        case '/':
            return divide([num1,num2]);
            break;
    }
}

function populate(contenido){
    if(contenido.classList.contains("equal")){
        console.log("operador");
        display.value = calculate(display.value);
    }
    else{
        display.value = display.value + contenido.textContent;
    }
}

function listeners(){
    const buttons = document.querySelectorAll(".wrapper button");
    const arrayButtons = Array.from(buttons);
    console.log(arrayButtons);

    arrayButtons.forEach((button) => 
        button.addEventListener('click', () => {
            populate(button);
        })
    );
}

function calculate(value){
    console.log(value);
    console.log(typeof(value));
    const myArray = value.split(""); //paso el string a un array . 9x6 = [9, x, 6]
    const index = indexOperator(myArray); //busco el operador. index 1.
    let operator = myArray[index];
    let n1 = arrayToNum(myArray.slice(0, index));
    let n2 = arrayToNum(myArray.slice(index+1));
    console.log(n1);
    console.log(n2);
    return operate(operator,n1,n2);
}

function arrayToNum(array){
    return parseInt(array.join('',10));
}
function indexOperator(array){

    if(array.indexOf('x') > 0){
        return array.indexOf('x');
    }
    else if (array.indexOf('/') > 0){
        return array.indexOf('/');
    }
    else if (array.indexOf('-') > 0){
        return array.indexOf('-');
    }
    else if (array.indexOf('+') > 0){
        return array.indexOf('+');
    }
}

let firstNumber;
let operator;
let secondNumber;
const display = document.querySelector(".display input");

listeners();