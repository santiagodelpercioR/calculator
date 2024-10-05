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
function calculate(value){
    console.log(value);
    console.log(firstNumber + ' ' + secondNumber);
    
    let operator = myArray[index];
    let n1 = arrayToNum(myArray.slice(0, index));
    let n2 = arrayToNum(myArray.slice(index+1));
    console.log(n1);
    console.log(n2);
    return operate(operator,n1,n2);
}

function populate(button){ // Se clickeo un boton
    console.log(pantalla.value);
    console.log("clickeo " + button.textContent);
    if(button.classList.contains("number-button")){                       //Si es un digito sigo acumulando digitos en la pantalla
        if(firstNumber === 'no'){                                         //Si es el primer numero lo acumulo ahi y en la pantalla
            pantalla.value = pantalla.value + button.textContent;
        }
        if(secondNumber === 'no' && !(firstNumber === 'no')){                                   //Si es el segundo numero lo acumulo ahi
            pantalla.value = '';
            pantalla.value = pantalla.value + button.textContent;
            secondNumber = pantalla.value;
        }                   
    }
    else if(button.classList.contains("delete")){                         // Si es delete, limpio la pantalla
        pantalla.value = '';
        firstNumber = 'no';
        secondNumber = 'no';
        operator = 'no'                                           
    }
    else if (button.classList.contains("operator-button")){
            firstNumber = pantalla.value;
            operator = button.textContent;
            
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

let firstNumber = 'no';
let operator = 'no';
let secondNumber = 'no';
const pantalla = document.querySelector(".display input");
pantalla.value = '';

listeners();