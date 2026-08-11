"use strict";
//  Create and Use Namespace
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Calculator.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    Calculator.multiply = multiply;
    function divide(a, b) {
        return a / b;
    }
    Calculator.divide = divide;
})(Calculator || (Calculator = {}));
console.log("Addition =", Calculator.add(20, 10));
console.log("Subtraction =", Calculator.subtract(20, 10));
console.log("Multiplication =", Calculator.multiply(20, 10));
console.log("Division =", Calculator.divide(20, 10));
// Export and Import Modules (Single File Demo)
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log("Add =", add(10, 65));
console.log("Subtract =", subtract(10, 53));
console.log("Multiply =", multiply(10, 26));
console.log("Divide =", divide(10, 75));
//  Generic Variables and Generic Functions
let numberList = [10, 20, 30, 40];
let stringList = ["css", "nodejs", "ts"];
console.log(numberList);
console.log(stringList);
function display(value) {
    return value;
}
console.log(display(10));
console.log(display("TypeScript"));
console.log(display(true));
function printName(obj) {
    console.log("Name:", obj.name);
}
printName({ name: "Hansika" });
printName({ name: "Angelina", age: 18 });
