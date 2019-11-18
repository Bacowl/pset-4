 
const readlineSync = require("readline-sync");

console.log()

var number = null;
var fibonacci1 = 0;
var fibonacci2 = 1;
var fibonacciCurrent = 0;

while (number < 1 || number % 1 != 0 || number > 78) {
  var number= Number (readlineSync.question("Positive integer: "))
}

for (loop = 1; loop < number; loop++) {
 var fibonacciCurrent = fibonacci2 + fibonacci1;
 var fibonacci1 = fibonacci2;
 var fibonacci2 = fibonacciCurrent;
}

Console.log(fibonacci2.toLocaleString("en") + ".")
