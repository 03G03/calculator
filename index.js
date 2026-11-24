const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function (a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === ":") {
        return divide(a, b);
    }
}

const resetVariable = function () {
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

const sectionCalculator = document.querySelector(".section-calculator");
const display = document.querySelector("#display-box");
let btnclick = document.querySelector("#buttons");

const regex = /[0-9.]/;

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

btnclick.addEventListener('click', (event) => {
    let btnValue = event.target.innerText;

    console.log(btnValue + " clicked!");

    display.textContent += btnValue;

    if (operator === "" && regex.test(btnValue)) {
        firstNumber += btnValue;

        console.log("firstnumber is " + firstNumber);
    } else if (operator !== "" && regex.test(btnValue)) {
        secondNumber += btnValue;

        console.log("secondnumber is " + secondNumber);
    };

    if (btnValue === "clear") {
        resetVariable();
        display.textContent = "";
    } else if (btnValue === "backspace") {
        //not yet functioning
    } else if (
        btnValue === "+" ||
        btnValue === "-" ||
        btnValue === "x" ||
        btnValue === ":") {
        operator = btnValue;

        console.log("operator is " + operator);
    } else if (btnValue === "=") {

        console.log(`BEFORE OPERATE(): first (${firstNumber}) operator (${operator}) second(${secondNumber})`);

        result = operate(+firstNumber, operator, +secondNumber);
        console.log("result is " + result);
        display.textContent = result;
        resetVariable();
        firstNumber = result;

        console.log(`AFTER OPERATE(): first (${firstNumber}) operator (${operator}) second(${secondNumber})`);
    }
});