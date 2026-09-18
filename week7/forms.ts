// Form input
let name: string = "Tejaswini";
let age: number = 20;
let email: string = "tejaswini@gmail.com";

// Basic validation
if (name === "") {
    console.log("Name is required");
}
else if (age < 18) {
    console.log("Age must be 18 or above");
}
else if (!email.includes("@")) {
    console.log("Invalid email");
}
else {
    console.log("Form submitted successfully");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
}