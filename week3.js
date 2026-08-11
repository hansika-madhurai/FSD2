"use strict";
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let s = new Student("Hansika", 18);
s.display();
class Blush {
    brand;
    shade;
    constructor(brand, shade) {
        this.brand = brand;
        this.shade = shade;
    }
    showProduct() {
        console.log("Brand: " + this.brand);
        console.log("Shade: " + this.shade);
    }
}
let blush = new Blush("Maybelline", "Ruby Red");
blush.showProduct();
class Cosmetic {
    productName;
    price;
    category;
    constructor(productName, price, category) {
        this.productName = productName;
        this.price = price;
        this.category = category;
    }
    showDetails() {
        console.log("Product: " + this.productName);
        console.log("Price: ₹" + this.price);
        console.log("Category: " + this.category);
    }
}
class Makeup extends Cosmetic {
    display() {
        console.log("Product: " + this.productName);
        console.log("Category: " + this.category);
    }
}
let item = new Makeup("Liquid Foundation", 999, "Face Makeup");
item.display();
console.log(item.productName);
class BeautyStore {
    storeName;
    static country = "India";
    constructor(storeName) {
        this.storeName = storeName;
    }
    display() {
        console.log("Store Name: " + this.storeName);
        console.log("Country: " + BeautyStore.country);
    }
}
let store = new BeautyStore("Nykaa Luxe");
store.display();
// store.storeName = "Sephora"; // Error (readonly)
console.log("Static Member: " + BeautyStore.country);
