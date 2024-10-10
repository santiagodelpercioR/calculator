function sum(n1,n2){   // Recibe un array de numeros y devuelve la suma
    return n1+n2;
}

function substract(n1,n2){
    return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    return n1/n2;
}

function operate(operator,num1,num2){
    console.log('operador: ' + operator + " num1: " + num1 + " num2 " + num2);
    let resultado;
    switch(operator){
        case '+':
            resultado = sum(num1,num2);
            break;
        case '-':
            resultado = substract(num1,num2);
            break;
        case 'x':
            resultado = multiply(num1,num2);
            break;
        case '/':
            resultado = divide(num1,num2);
            break;
    }
    return parseFloat(resultado.toFixed(9));
}

/*function populate(button){ // Se clickeo un boton
    if (button.classList.contains("number-button")){
        pantalla.value = pantalla.value + button.textContent;
    }
    else if (button.classList.contains("operator-button")){    //Operator : * / + -
        if(operator == 0){           // Si no tengo un operador guardado
            firstNumber = parseFloat(pantalla.value); //agarro todo lo que esta en el display y lo guardo en una variable PRIMERNUMERO.
            pantalla.value = ''; //borro todo lo que esta en el display
            operator = button.textContent; //guardo el operador en una variable OPERADOR
            miniPantalla.value = firstNumber;
        }
        else { // Si existe un operador guardado
            secondNumber = parseFloat(pantalla.value);
            console.log(secondNumber);
            pantalla.value = operate(operator,firstNumber,secondNumber);
            console.log(button.textContent);
            operator = 0;
            populate(button);
            secondNumber = 'no';
            miniPantalla.value = firstNumber;
        }
    }
    else if (button.classList.contains("equal")){
        if(firstNumber !== 'no' ){                  //si tengo first number y no tengo secondNumber
            secondNumber = parseFloat(pantalla.value); //agarro todo lo que esta en el display lo guardo en una variable SEGUNDONUMERO.
            pantalla.value = operate(operator, firstNumber, secondNumber);//display.value = calculo(operador,PRIMERNUMERO, SEGUNDONUMERO)
            miniPantalla.value = pantalla.value;
            firstNumber = pantalla.value;
            secondNumber = 'no';
        }
    }
    else if (button.classList.contains("delete")){
        pantalla.value = '';
        firstNumber = 'no';
        secondNumber = 'no';
        miniPantalla.value = pantalla.value;
    }
    else if (button.classList.contains("negative")){
        let float = parseFloat(pantalla.value);
        let signo = Math.sign(float)
        if(signo > 0 ){
            pantalla.value = -1 * signo * float;
        }
        else if (signo < 0){
            pantalla.value = signo * float;
        }
    }
}*/

function populate(button){

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

let firstNumber;
let operator;
let secondNumber;
const pantalla = document.querySelector(".display input");
pantalla.value = '';
const miniPantalla = document.querySelector(".minidisplay input");
miniPantalla.value = '☆';

listeners();

