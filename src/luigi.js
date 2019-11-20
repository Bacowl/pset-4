const readlineSync = require("readline-sync");

var height = 0;
var string = "##";
var reverse = "##";

console.log("")

while (height < 1 || height % 1 != 0 || height > 24) {
  var height = Number(readlineSync.question("Height: "));
}

var height2 = height;
var height3 = height;

while (height2 > 1) {
  var string = " " + string;
  --height2
}

while (height3 > 1) {
  var reverse = reverse + " ";
  --height3
}

console.log("\n" + string + "  " + reverse)

while (height > 1) {
  var newString = string.replace(" #", "##")
  var newReverse = reverse.replace("# ", "##")
  console.log(newString + "  " + newReverse)
  --height
  var string = newString
  var reverse = newReverse
}
console.log()
