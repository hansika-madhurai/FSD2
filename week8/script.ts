let isLoggedIn: boolean = false;


// LOGIN
function login() {

    let username = (document.getElementById("username") as HTMLInputElement).value;
    let cookieName = (document.getElementById("cookieName") as HTMLInputElement).value;

    if (username == "") {
        alert("Please enter username");
        return;
    }

    if (cookieName == "") {
        alert("Please enter cookie name");
        return;
    }

    // Maintaining State
    isLoggedIn = true;

    // Create Cookie
    document.cookie = cookieName + "=" + username;

    document.getElementById("message")!.innerHTML =
        "Welcome " + username + "! You are logged in.";

    console.log("Login State:", isLoggedIn);
}


// LOGOUT
function logout() {

    isLoggedIn = false;

    document.getElementById("message")!.innerHTML =
        "You are logged out.";

    console.log("Login State:", isLoggedIn);
}


// READ COOKIE
function readCookie() {

    let cookieName = (document.getElementById("cookieName") as HTMLInputElement).value;

    if (cookieName == "") {
        alert("Please enter cookie name");
        return;
    }

    document.getElementById("message")!.innerHTML =
        "Cookie: " + document.cookie;

    console.log("Cookie:", document.cookie);
}