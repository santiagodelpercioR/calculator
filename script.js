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

function populate(button){ // Se clickeo un boton
    if (button.classList.contains("number-button")){
        pantalla.value = pantalla.value + button.textContent;
    }
    else if (button.classList.contains("operator-button")){
        if(firstNumber === 'no'){           // no tengo guardado un primer numero
            firstNumber = parseFloat(pantalla.value); //agarro todo lo que esta en el display y lo guardo en una variable PRIMERNUMERO.
            pantalla.value = ''; //borro todo lo que esta en el display
            operator = button.textContent; //guardo el operador en una variable OPERADOR
            //me pongo a escuchar esperando un NUMERO2 (activo una flag). eso me lo va a indicar firstNumber
        }
    }
    else if (button.classList.contains("equal")){
        if(firstNumber !== 'no' ){                  //si tengo first number y no tengo secondNumber
            secondNumber = parseFloat(pantalla.value); //agarro todo lo que esta en el display lo guardo en una variable SEGUNDONUMERO.
            pantalla.value = operate(operator, firstNumber, secondNumber);//display.value = calculo(operador,PRIMERNUMERO, SEGUNDONUMERO)
        }
    }
    else if (button.classList.contains("delete")){
        pantalla.value = '';
        firstNumber = 'no';
        secondNumber = 'no';
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

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}


let firstNumber = 'no';
let operator;
let secondNumber = 'no';
const pantalla = document.querySelector(".display input");
pantalla.value = '';

listeners();

