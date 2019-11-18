const readlineSync = require("readline-sync");

var lower = null;
var upper = null;
var total = 0;
var check = null;

console.log()

while (check != 1) {
  var lower = Number (readlineSync.question("Lower bound: "));
  var upper = Number (readlineSync.question("Upper bound: "));
  if (lower%1!==0 || upper%1!==0){
    var check = null;
  } else if (lower >= upper) {
      var check = null;
  } else if (upper < Number.MIN_SAFE_INTEGER || upper > Number.MAX_SAFE_INTEGER) {
      var check = null;
  } else if (lower < Number.MIN_SAFE_INTEGER || lower > Number.MAX_SAFE_INTEGER) {
     var check = null;
  } else {
    var check = 1;
  }
}

if (upper%2==1) {
  var upper= --upper;
}

while (upper >= lower) {
  var total = upper + total;
  var upper= upper-2;
}
let Final = total.toLocaleString("En")

console.log("\n"+Final+".")
