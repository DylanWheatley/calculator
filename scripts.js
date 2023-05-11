
//NFNT: Can't enter multi-digit numbers, figure out decimals for division.
//multi digit - a while loop with a boolean? maybe make a function that has all the click for numbers?

let digitsDone = false;


//functions for each math operator
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

//variables for each part of equation + logic varaibles
let numOne;
let NumTwo;
let operator;
let opChoice = false;
let display = document.querySelector(".display-text");
let opText = document.querySelector(".op-text");

//DOM for clear and delete
let clear = document.querySelector(".clear")

//DOM Selectors for numbers
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

//DOM for operators and equal 
const equal = document.querySelector(".equal");
const add = document.querySelector(".add");
const multi = document.querySelector(".multiply");
const sub = document.querySelector(".minus");
const div = document.querySelector(".divide")



//operate function is what does the actual math operation + puts result on display + checks if two numbers are there
function operate () {

    if (numOne === undefined || NumTwo === undefined || opChoice === false) {
        display.textContent = "ERROR";
    }

    else if (opChoice === true && operator === "+") {
        numOne = addition(numOne, NumTwo);
        NumTwo = undefined; //resets math each time, allowing for the answer to have a new operator and number
        opText.textContent = "";
        return display.textContent = numOne.toString();
    }

    else if (opChoice === true && operator === "*") {
        numOne = multiply(numOne, NumTwo);
        NumTwo = undefined;
        opText.textContent = "";
        return display.textContent = numOne.toString();
    }

    else if (opChoice === true && operator === "-") {
        numOne = subtration(numOne, NumTwo);
        NumTwo = undefined;
        opText.textContent = "";
        return display.textContent = numOne.toString();
    }

    else if (opChoice === true && operator === "/") {
        numOne = divide(numOne, NumTwo);
        NumTwo = undefined;
        opText.textContent = "";
        // parseFloat(numOne).toFixed(2);
        return display.textContent = numOne.toString();
    }


    equal.removeEventListener('click', operate);
}


//Event listeners for all of the buttons, storing number + putting on display

one.addEventListener('click', () => {


    if (digitsDone === false) {
        display.textContent += "1";
    }

    else {
        display.textContent = "";
        display.textContent = "1";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

two.addEventListener('click', () => {


    if (digitsDone === false) {
        display.textContent += "2";
    }

    else {
        display.textContent = "";
        display.textContent = "2";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

three.addEventListener('click', () => {
    if (digitsDone === false) {
        display.textContent += "3";
    }

    else {
        display.textContent = "";
        display.textContent = "3";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

four.addEventListener('click', () => {
    if (digitsDone === false) {
        display.textContent += "4";
    }

    else {
        display.textContent = "";
        display.textContent = "4";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

five.addEventListener('click', () => {
    if (digitsDone === false) {
        display.textContent += "5";
    }

    else {
        display.textContent = "";
        display.textContent = "5";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

six.addEventListener('click', () => {
    if (digitsDone === false) {
        display.textContent += "6";
    }

    else {
        display.textContent = "";
        display.textContent = "6";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

seven.addEventListener('click', () => {
    if (digitsDone === false) {
        display.textContent += "7";
    }

    else {
        display.textContent = "";
        display.textContent = "7";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

eight.addEventListener('click', () => {
    if (digitsDone === false) {
        display.textContent += "8";
    }

    else {
        display.textContent = "";
        display.textContent = "8";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

nine.addEventListener('click', () => {
    if (digitsDone === false) {
        display.textContent += "9";
    }

    else {
        display.textContent = "";
        display.textContent = "9";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});

zero.addEventListener('click', () => {

    if (numOne > 0) {

    
    if (digitsDone === false) {
        display.textContent += "0";
    }
    }
    else {
        display.textContent = "";
        display.textContent = "0";
        digitsDone = false;
    }



  
    if (numOne === undefined) {
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (NumTwo === undefined && opChoice === false){
        numOne = parseInt(display.textContent);
        console.log("numOne " + numOne);
    }

    else if (opChoice === true) {
        digitsDone = false;
        NumTwo = parseInt(display.textContent);
        console.log("NumTwo " + NumTwo) 
    }
});
clear.addEventListener('click', () => {
    numOne = undefined;
    NumTwo = undefined;
    // console.log(numOne);
    // console.log(NumTwo);
    display.textContent = "";
    opText.textContent = "";
})


//Event listeners for operators and equal
add.addEventListener('click', () => {
    opChoice = true;
    opText.textContent = "+"
    operator = "+";
    digitsDone = true;
})

multi.addEventListener('click', () => {
    opChoice = true;
    opText.textContent = "*"
    operator = "*";
})

sub.addEventListener('click', () => {
    opChoice = true;
    opText.textContent = "-"
    operator = "-";
})

div.addEventListener('click', () => {
    opChoice = true;
    opText.textContent = "/"
    operator = "/";
})

equal.addEventListener('click', operate);



