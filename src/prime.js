const readlineSync = require("readline-sync");

console.log()

var number = -1;
var loop = 2;

while (number < 0 || number % 1 != 0 || number > Number.MAX_SAFE_INTEGER) {
var number= Number (readlineSync.question("Positive integer: "));
}

while (loop <= Math.sqrt(number) && end != 1) {
  if ((number/loop)%1 == 0) {
    console.log("\nNot Prime.")
    var end = 1;
  }
  ++loop
}

if (end != 1) {
  console.log("\nPrime.")
}
