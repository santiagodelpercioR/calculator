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
    /*
    // Botones posibles: numeros, operadores, igual y delete.
    // Si (es un digito){
        Lo acumulo en el display
        sigo
    }
    else if (es un operador (* / + -)){
        si (no tengo guardado un PRIMERNUMERO){
            agarro todo lo que esta en el display y lo guardo en una variable PRIMERNUMERO.
            borro todo lo que esta en el display
            guardo el operador en una variable OPERADOR
            me pongo a escuchar esperando un NUMERO2 (activo una flag)
        }
        else if (si aprieto un operador y ya tengo un PRIMERNUMERO){
            no hago nada
        }
    }
    else if (es el boton igual){
        if (tengo PRIMERNUMERO y no tengo SEGUNDONUMERO (es decir, si la flag de esperar activamente el NUMERO2 esta activada)){
            agarro todo lo que esta en el display lo guardo en una variable SEGUNDONUMERO.
            display.value = calculo(operador,PRIMERNUMERO, SEGUNDONUMERO)
        }
    
    }
    else if (es el boton delete){
        display.value = '';
        primernumero = 'no';
        segundonumero = 'no';
    }*/
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