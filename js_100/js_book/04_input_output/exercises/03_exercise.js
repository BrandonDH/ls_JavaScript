let RLSync = require('readline-sync');
let myAge = Number(RLSync.question("How old are you?"));
let numYears = 10;

console.log(`In ${numYears} years, you will be ${myAge + numYears} years old.`)
console.log(`In ${numYears*2} years, you will be ${myAge + (numYears*2)} years old.`)
console.log(`In ${numYears*3} years, you will be ${myAge + (numYears*3)} years old.`)
console.log(`In ${numYears*4} years, you will be ${myAge + (numYears*4)} years old.`)