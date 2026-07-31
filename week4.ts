//  Create and Use Namespace

namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        return a / b;
    }
}

console.log("Addition =", Calculator.add(20, 10));
console.log("Subtraction =", Calculator.subtract(20, 10));
console.log("Multiplication =", Calculator.multiply(20, 10));
console.log("Division =", Calculator.divide(20, 10));


// Export and Import Modules (Single File Demo)

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

console.log("Add =", add(10, 65));
console.log("Subtract =", subtract(10, 53));
console.log("Multiply =", multiply(10, 26));
console.log("Divide =", divide(10, 75));


//  Generic Variables and Generic Functions

let numberList: Array<number> = [10, 20, 30, 40];
let stringList: Array<string> = ["css", "nodejs", "ts"];

console.log(numberList);
console.log(stringList);

function display<T>(value: T): T {
    return value;
}

console.log(display<number>(10));
console.log(display<string>("TypeScript"));
console.log(display<boolean>(true));


//  Generic Constraints

interface Person {
    name: string;
}

function printName<T extends Person>(obj: T): void {
    console.log("Name:", obj.name);
}

printName({ name: "Hansika" });
printName({ name: "Angelina", age: 18 });

