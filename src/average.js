const readlineSync = require("readline-sync");

console.log()

var number = null;
var moreThanOne = 0;
var addition = 0;
var total = null;

while ( number == null || number > 0 || moreThanOne <= 1) {
  var number= Number (readlineSync.question("Non-negative integer: "))
  ++moreThanOne;
  if (number > 0 && number <= Number.MAX_SAFE_INTEGER) {
    var total = total + number;
  } else if (moreThanOne > 1 && number <0) {
    console.log("\n" + Intl.NumberFormat("en", { style: 'decimal', maximumFractionDigits:3, minimumFractionDigits:3 }).format(total/(moreThanOne-1)) + ".")
  } else {
    --moreThanOne;
  }
}

console.log()
