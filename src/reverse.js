const readlineSync = require("readline-sync");

console.log()

var number = null;
var digit = 0

while (number < 1 || number % 1 != 0 || number > Number.MAX_SAFE_INTEGER) {
var number= Number (readlineSync.question("Positive integer: "))
}

var number2 = number

while (number2 >= 1) {
var number2 = number2/10;
var digit = digit + 1;
}

for (var loop = 0; loop < digit; loop++) {
 var number = number/10
 console.log(number - Math.floor(number))
 var number = Math.round((number - (number - Math.floor(number)))*10)
}
