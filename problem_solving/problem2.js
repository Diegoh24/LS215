/*
Luhn formula, validates id numbers (credit cards candian ssn)

verifies a number against an included check digit,
- check digit is appended to a partial number to generate the full number.

test:
- counting from the rightmost digit and moving left, double the value of every second digit
- conting from the leftmost digit and moving right, double the value of every digit with an even index, every other digit

- for any digit that thus becomes 10 or more, subtract 9 from the result
  - any digit greater than 5, will become x + (x - 9)
  - for any digit less than 5, it will become x + x

  7
  7
  3
  3

- add all the digits together, the transformed digit
- sum

- if the total checksum ends in 0, (sum % 10 === 0)
  - the last digit is 0
- then the number is valid

else it is not valid


input: a string

2323 2005 7766 3554

2323
4343 4005 5736 6514
14 + 9 + 12 + 9 + 11 + 5
23 + 21 + 16
44 + 16
60 --- valid




4343 4001 5736 6514


14 + 5 + 13 + 9 + 11 + 5
19 + 22 + 16
35 + 22
57

input will be a string, it could potential contain non digit characters.
still compute if the string contains non numeric strings


 counting from the rightmost digit and moving left, double the value of every second digit
- conting from the leftmost digit and moving right, double the value of every digit with an even index, every other digit

- for any digit that thus becomes 10 or more, subtract 9 from the result
  - any digit greater than 5, will become x + (x - 9)
  - for any digit less than 5, it will become x + x

  7
  7
  3
  3

- add all the digits together, the transformed digit
- sum

- if the total checksum ends in 0, (sum % 10 === 0)
  - the last digit is 0
- then the number is valid

else it is not valid

data structure:
strings initially, clean it up, regex, replace
use an array of the characters of the clean string, perform transforamtion on each digit


algorithm:
- clean the string, to just integer
  - replace any non digit characters to ''
- iterate over the character in a collection containing digits
- for every other digit, transform the digit into digit + (digit - 9)
- array of transformed digits
- reduce the array to a sum
- if the last digit of the sum is 0, return true, else false.'



additional requirement:
write a funciton that can add a check digit to make the number valid per the luhn formula
and return the original number plus that digit
'2323 2005 7766 355' '2323 2005 7766 3554'

input: a string, that does not conform to the luhn formula
output the string plus a digit that makes the string conform to the luhn formula

same requirements: string can contain other char, not digits
have the basic logic needed to determine the totalSum.
see what number can be added to the check sum to product a valid checksum ( num % 10 === 0)


- figure out the length of the digits.
implicit:
- 111, the 5th character, the digit to come, will be doubles
- 12345, 5 characters, the next character to be added will not be transformed

- iterate starting from the totalSum, add 1 every time,

data structure:
array, reduce, etc.


algorithm:
clean the string, split it into digits, transform the digits into numbers
determine whether the next digit in the string is to be transformed,
- take the length of the array of digits, the length will be the next index of the digit to be added
- if the index % 2 === 0, the next digit to be added willn be transformed otherwise not

helper(totalSum, index)
set a variable digit to 1
set transform =  index % 2 === 0

loop no condition
depending on the index, set digit to digit or transformDigit
break if digit

return digit

*/

let transformDigit = digit => digit >= 5 ? digit * 2 - 9 : digit * 2;


function checksum(numString) {
  let digits = numString.replace(/\D/g, '').split('').map(Number).reverse();
  let totalSum = digits.reduce((sum, digit, index) => {
    return sum + (index % 2 !== 0 ? transformDigit(digit) : digit)
  }, 0);
  return totalSum % 10 === 0;
}

console.log(checksum('11114'));
console.log(checksum('jdsa2121 4 213 21 412'));
console.log(checksum('2323dfa 20sad05 77--dsad()66 3554'));
console.log(checksum('2323 2005.7766 3554'));
console.log(checksum('8763'));
console.log(checksum('1111'));
console.log(checksum('999999999999999'));

// youu already had the logic...
// there was only 9 possible digits what happened??
function makeValid(string) {
  if (checksum(string)) return string;

  for (let digit = 0; digit <= 9; digit += 1) {
    let currentString = string + String(digit);
    if (checksum(currentString)) return currentString;
  }
}

console.log(makeValid('2323 2005 7766 355'));
console.log(makeValid('1111'));
console.log(makeValid('2324'));
console.log(makeValid('2323 2005 7766 3554'));