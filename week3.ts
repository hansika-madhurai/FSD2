class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s = new Student("Hansika", 18);
s.display();




class Blush {
    brand: string;
    shade: string;

    constructor(brand: string, shade: string) {
        this.brand = brand;
        this.shade = shade;
    }

    showProduct(): void {
        console.log("Brand: " + this.brand);
        console.log("Shade: " + this.shade);
    }
}

let blush = new Blush("Maybelline", "Ruby Red");
blush.showProduct();


class Cosmetic {
    public productName: string;
    private price: number;
    protected category: string;

    constructor(productName: string, price: number, category: string) {
        this.productName = productName;
        this.price = price;
        this.category = category;
    }

    showDetails(): void {
        console.log("Product: " + this.productName);
        console.log("Price: ₹" + this.price);
        console.log("Category: " + this.category);
    }
}

class Makeup extends Cosmetic {
    display(): void {
        console.log("Product: " + this.productName); 
        console.log("Category: " + this.category);   
    }
}

let item = new Makeup("Liquid Foundation", 999, "Face Makeup");

item.display();

console.log(item.productName);




class BeautyStore {
    readonly storeName: string;
    static country: string = "India";

    constructor(storeName: string) {
        this.storeName = storeName;
    }

    display(): void {
        console.log("Store Name: " + this.storeName);
        console.log("Country: " + BeautyStore.country);
    }
}

let store = new BeautyStore("Nykaa Luxe");

store.display();


console.log("Static Member: " + BeautyStore.country);