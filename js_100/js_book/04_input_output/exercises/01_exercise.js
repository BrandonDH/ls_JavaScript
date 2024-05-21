
let readLineSync = require('readline-sync'); 

let name = readLineSync.question("What's your name?")

console.log(`Hello, ${name}!`);