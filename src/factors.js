const readlineSync = require("readline-sync");

var number = 0;
var loop = 1;
var string = "\n";

while (number > 1 || number % 1 != 0 || number > Number.MAX_SAFE_INTEGER) {
  var number = Number(readlineSync.question("Positive integer: "));
}

while (loop < Math.sqrt(number)) {
  if ((number/loop)%1 = 0) {
    if (number/loop == loop) {
      var string = string + String(loop);
    } else {
      var string = string + String(loop) + ", " + String(number/loop)
    }
  }
  if (loop < Math.sqrt(number)-1) { 
    var string = string + ", "
  } else {
    var string = string + "."
  }
}
