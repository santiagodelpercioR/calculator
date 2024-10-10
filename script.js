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
    resultado = parseFloat(resultado);
    console.log('operador: ' + operator + " numA: " + num1 + " numB " + num2 + " RESULTADO = " + resultado);
    return parseFloat(resultado.toFixed(9));
}

function populate(button){
    if (button.classList.contains("number-button")){
        if(parseFloat(pantalla.value) == resultado){
            console.log("IGUAL A RESULTADO");
            pantalla.value = '';
            firstNumber = 'no';
            secondNumber = 'no';
            miniPantalla.value = pantalla.value;
        }
        pantalla.value = pantalla.value + button.textContent;
    }
    else if(button.classList.contains("operator-button")){
        if(firstNumber === 'no'){      //si no existe un firstNumber
            firstNumber = parseFloat(pantalla.value);
            operator = button.textContent;
            pantalla.value = '';
        }
        else {                       //si existe un firstNumber
            secondNumber = parseFloat(pantalla.value);
            resultado = operate(operator, firstNumber, secondNumber);
            operator = button.textContent;
            pantalla.value = resultado;
            firstNumber = resultado;
            miniPantalla.value = resultado;
            pantalla.value = '';
        }
    }
    else if (button.classList.contains("equal")){
        secondNumber = parseFloat(pantalla.value);
        resultado = operate(operator, firstNumber, secondNumber);
        operator = button.textContent;
        pantalla.value = resultado;
        firstNumber = 'no';
        miniPantalla.value = resultado;
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
let secondNumber;
let resultado;
const pantalla = document.querySelector(".display input");
pantalla.value = '';
const miniPantalla = document.querySelector(".minidisplay input");
miniPantalla.value = '☆';

listeners();

