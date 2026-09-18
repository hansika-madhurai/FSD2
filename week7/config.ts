// Configuration values
const config = {
    appName: "My Movie App",
    port: 3000,
    username: "Tejaswini"
};

// Template
const template = `
Application: ${config.appName}
Port: ${config.port}
Username: ${config.username}
`;

// Validation
if (config.appName === "") {
    console.log("App name is required");
} else if (config.port <= 0) {
    console.log("Port number is invalid");
} else if (config.username === "") {
    console.log("Username is required");
} else {
    console.log("Configuration is valid");
}

// Render the values
console.log(template);