const readlineSync = require("readline-sync");

var lower = null;
var upper = null;
var total = 0;

while (lower==null || upper == null || lower >= upper || Number.isNaN(lower) || Number.isNaN(upper) || Math.round(upper) != upper || Math.round(lower) != lower || upper < Number.MIN_SAFE_INTEGER || lower < Number.MIN_SAFE_INTEGER ||  upper > Number.MAX_SAFE_INTEGER || lower > Number.MAX_SAFE_INTEGER) {
  var lower = Number (readlineSync.question("Lower bound: "));
  var upper = Number (readlineSync.question("Upper bound: "));
}
while (upper != lower) {
  var total = upper + total;
  var upper= --upper;
}
let Final = total.toLocaleString("En")

console.log(total)
