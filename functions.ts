export {};
function add(a: number,b: number):number{
    return a+b;
}
let a=68;
let b=40;
console.log(add(a,b));       //WITH RETURN-TYPE

function greet(name: string): void{
    console.log("hy "+name);
}
let name="Hansika";
greet(name);        //NO RETURN-TYPE

function getOrder(food: string="dessert"): void{
    console.log(" my favourite "+food+" is yummy");
}
getOrder("dessert");  //default parameters

function multiplyNumbers(...numbers: number[]): void{
    let result = 1;
    for(let num of numbers){
        result *= num;
    }
    console.log(result);
}
multiplyNumbers(1,2,3,4,5,6);

const square =(a: number): number =>{
    return a*a;
};
console.log(square(64));


function carDetails(brand: string, model?: string): void {
    console.log("Brand: " + brand);

    if (model) {
        console.log("Model: " + model);
    }
}

carDetails("Toyota", "Fortuner");
carDetails("Honda");



