/*
function performs an octal to decimal
when invoked on a string that contains the representation of an octal number,
the function returns a decimal version of that value as a Number

abstractions
need to work with each character individually,

use an array of characters #split
convert the array of characters to numbers
convert the array of number to the their octal counterpart, number to the octal power based on the position
return the array of octal digits, joined into a string and converted to a number
*/

function octalToDecimal(numberString) {
  let digits = numberString.split('').map(digit => Number(digit));
  let octalDigits = digits.reverse().map((digit, place) => digit * (8 ** place));
  let octal = octalDigits.reduce((number, digit) => number + digit);
  return octal;
}

function octalToDecimal(numberString) {
  return numberString.split('').reduce((sum, digitChar, index) => {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');