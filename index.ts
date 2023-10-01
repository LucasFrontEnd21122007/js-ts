// Arquivo: app.ts
function greet(name: string) {
    return `Hello, ${name}!`;
}
console.log(greet("John"));
// Arquivo gerado: app.js
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("John"));
