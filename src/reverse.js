const readlineSync = require("readline-sync");

console.log()

var number = null;
var digit = 0;
var string = "\n"

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
var string = string + String(Math.round((number - Math.floor(number))*10))
if (loop < digit - 1 ) {
  var string = string + ", "
} else {
    var string = string + "."
}
 var number = (number - (number - Math.floor(number)))
}
 console.log(string)
 console.log()
