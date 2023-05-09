
//make a calculator

//functions for each math operator
//add, subtract, multiply, divide

function addition (a, b) {
    return a +b;
}

function subtration (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

//variables for each part of equation
//first number, operand, second number
let numOne;
let NumTwo;
let operator;
let opChoice = false;
let display = document.querySelector(".display-text");

const one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let add = document.querySelector(".add");


//function called "operate" that takes operator and 2 numbers
//uses math functions above

function operate (a, b, oper) {

}

//Create the functions that populate the display when you click the number buttons. 
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.

one.addEventListener('click', () => {
    display.textContent = "1";
    if (numOne === undefined) {
        numOne = 1;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 1;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 1;
        console.log("NumTwo " + NumTwo) 
    }
});

two.addEventListener('click', () => {
    display.textContent = "1";
    if (numOne === undefined) {
        numOne = 2;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 2;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 2;
        console.log("NumTwo " + NumTwo) 
    }
});

add.addEventListener('click', () => {
    opChoice = true;
})

console.log(numOne);
console.log(NumTwo);
