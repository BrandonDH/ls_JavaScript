let readLineSync = require('readline-sync'); 

let firstName = readLineSync.question("What's your first name?")
let lastName = readLineSync.question("What's your last name??")
console.log(`Hello, ${firstName} ${lastName}!`);