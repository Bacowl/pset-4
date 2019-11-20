const readlineSync = require("readline-sync");

var number = 0;
var loop = 1;
var string = "\n";

console.log()

while (number < 1 || number % 1 != 0 || number > Number.MAX_SAFE_INTEGER) {
  var number = Number(readlineSync.question("Positive integer: "));
}

if (Math.sqrt(number)%1 == 0) {
  var numberLoop = Math.sqrt(number) + 1
} else {
  var numberLoop = Math.sqrt(number)
}

while (loop < numberLoop) {
  if ((number/loop)%1 == 0) {
    if (number/loop == loop) {
      var string = string + String(loop);
      if (loop < Math.sqrt(number)-1) {
        var string = string + ", "
      } else {
        var string = string + "."
      }
    } else {
      var string = string + String(loop) + ", " + String(number/loop)
      if (loop < Math.sqrt(number)-1) {
        var string = string + ", "
      } else {
        var string = string + "."
      }
    }
  }
  ++loop
}

console.log(string)
console.log()
