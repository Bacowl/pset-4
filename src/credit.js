const readlineSync = require("readline-sync");

var cardNumber = 0;
var count = 1;
var addition = 0;
var digit = 0;

console.log("")

while (cardNumber < 1*(10**12) || cardNumber % 1 != 0 || cardNumber > (1*10**16)-1) {
  var cardNumber = Number(readlineSync.question("Number: "));
}

var cardNumber2 = cardNumber;
var cardNumber3 = cardNumber;

while (cardNumber2 >= 1) {
  var cardNumber2 = cardNumber2/10;
  var digit = digit + 1;
}

var firstDigit =  Math.floor(cardNumber/10**(digit-1));
var secondDigits = (Math.floor(cardNumber/10**(digit-2))/10)*10;

for (var loop = 0; loop < digit; loop++) {
  var singularDigit = (cardNumber - Math.floor(cardNumber/10)*10);
  var singularDigit = (singularDigit*1);
  var cardNumber = Math.floor(cardNumber/10);
  if (loop % 2 == 1) {
    if (singularDigit*2 >= 10) {
      var addition = addition + ((singularDigit*2 - singularDigit*2%10)/10 + singularDigit*2%10);
    } else if (singularDigit*2 < 10) {
      var addition = addition + singularDigit*2;
    }
  } else {
  var addition = addition + singularDigit;
  }
  ++count;
}

if (addition/10 % 1 != 0) {
  console.log("\nInvalid.")
} else if (digit == 15 && (secondDigits == 34 || secondDigits == 37)) {
  console.log("\nAmex.")
} else if (digit == 16 && (secondDigits <= 55 && secondDigits >= 51)) {
  console.log("\nMastercard.")
} else if ((digit == 13 || digit == 16) && firstDigit == 4) {
  console.log("\nVisa.")
}
console.log()
