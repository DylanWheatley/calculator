
//notes for 5/10 - work on operate function and make something add together. maybe it checks for the value of operatator variable?
//and then chooses which math function to use?


//make a calculator

//functions for each math operator
//add, subtract, multiply, divide




function addition (a, b) {
    return a + b;
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
let clear = document.querySelector(".clear")


const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const equal = document.querySelector(".equal");


const add = document.querySelector(".add");


//function called "operate" that takes operator and 2 numbers
//uses math functions above

function operate () {

    if (numOne === undefined || NumTwo === undefined || opChoice === false) {
        display.textContent = "ERROR";
    }

    else if (opChoice === true && operator === "+") {
        return display.textContent = addition(numOne, NumTwo).toString();
    }
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
    display.textContent = "2";
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

three.addEventListener('click', () => {
    display.textContent = "3";
    if (numOne === undefined) {
        numOne = 3;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 3;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 3;
        console.log("NumTwo " + NumTwo) 
    }
});

four.addEventListener('click', () => {
    display.textContent = "4";
    if (numOne === undefined) {
        numOne = 4;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 4;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 4;
        console.log("NumTwo " + NumTwo) 
    }
});

five.addEventListener('click', () => {
    display.textContent = "5";
    if (numOne === undefined) {
        numOne = 5;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 5;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 5;
        console.log("NumTwo " + NumTwo) 
    }
});

six.addEventListener('click', () => {
    display.textContent = "6";
    if (numOne === undefined) {
        numOne = 6;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 6;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 6;
        console.log("NumTwo " + NumTwo) 
    }
});

seven.addEventListener('click', () => {
    display.textContent = "7";
    if (numOne === undefined) {
        numOne = 7;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 7;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 7;
        console.log("NumTwo " + NumTwo) 
    }
});

eight.addEventListener('click', () => {
    display.textContent = "8";
    if (numOne === undefined) {
        numOne = 8;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 8;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 8;
        console.log("NumTwo " + NumTwo) 
    }
});

nine.addEventListener('click', () => {
    display.textContent = "9";
    if (numOne === undefined) {
        numOne = 9;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 9;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 9;
        console.log("NumTwo " + NumTwo) 
    }
});

zero.addEventListener('click', () => {
    display.textContent = "0";
    if (numOne === undefined) {
        numOne = 0;
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        NumOne = 0;
        console.log("numOne " + NumOne);
    }

    else if (NumTwo === undefined && opChoice === true) {
        NumTwo = 0;
        console.log("NumTwo " + NumTwo) 
    }
});

clear.addEventListener('click', () => {
    numOne = undefined;
    NumTwo = undefined;
    // console.log(numOne);
    // console.log(NumTwo);
    display.textContent = "0";
})

add.addEventListener('click', () => {
    opChoice = true;
    display.textContent = "+"
    operator = "+";
})

equal.addEventListener('click', operate);

