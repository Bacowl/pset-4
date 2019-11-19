const readlineSync = require("readline-sync");

var height = 0;
var string = "##"

console.log("")

while (height < 1 || height % 1 != 0 || height > 24) {
  var height = Number(readlineSync.question("Height: "));
}

var height2 = height

while (height2 > 1) {
  var string = " " + string
  --height2
}

console.log("\n" + string)

while (height > 1) {
  var newstring = string.replace(" #", "##")
  console.log(newstring)
  --height
  var string = newstring
}
