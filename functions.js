function add(a, b) {
    return a + b;
}
let a = 68;
let b = 40;
console.log(add(a, b)); //WITH RETURN-TYPE
function greet(name) {
    console.log("hy " + name);
}
let name = "Hansika";
greet(name); //NO RETURN-TYPE
function getOrder(food = "dessert") {
    console.log(" my favourite " + food + " is yummy");
}
getOrder("dessert"); //default parameters
function multiplyNumbers(...numbers) {
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }
    console.log(result);
}
multiplyNumbers(1, 2, 3, 4, 5, 6);
const square = (a) => {
    return a * a;
};
console.log(square(64));
function carDetails(brand, model) {
    console.log("Brand: " + brand);
    if (model) {
        console.log("Model: " + model);
    }
}
carDetails("Toyota", "Fortuner");
carDetails("Honda");
export {};
