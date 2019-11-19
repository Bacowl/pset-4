const readlineSync = require("readline-sync");

var height = 0;
var string = "##";
var reverse = " ";

console.log("")

while (height < 1 || height % 1 != 0 || height > 24) {
  var height = Number(readlineSync.question("Height: "));
}

var height2 = height;
var height3 = string.length;

while (height2 > 1) {
  var string = " " + string;
  --height2
}
for (var loop = 0; loop < height3; loop++) {
  var reverse = reverse + string.charAt(height3-loop)
  console.log(reverse)
}
console.log("\n" + string + "  " + reverse)

while (height > 1) {
  var newstring = string.replace(" #", "##")
  for (var loop = 0; loop < height3; loop++) {
    var reverse = reverse + string.charAt(height3-loop)
  }
  console.log(newstring + "  " + reverse)
  --height
  var string = newstring
}
