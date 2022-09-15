/*
20 mins...

Write a program that cleans up user-entered phone numbers so that they can be sent
as SMS messages. Other than didigts, the number nay also contain special characters,
such as ' ', '-', '.' and '(' or ')' that should be ignored

invalid number: Return string '0'
- less than 10 digits
- 11 digits with digits[0] != 1
- mor than 11 digits


if the phone number is 10 digits, it is good
if 11 digits, and digits[0] is 1, then trim the number use that las 10

understand the problem

input: a string with numbers, can have other characters as well
output: a cleaned up string, with only the digits. separate them with a dash...
- ignore characters such as spaces, dash, dot, parenthesis


explicit
- if the number is invalid, return string '0';
- if the number is good, return a string of numbers, separated with ...

implicit:
- edge case
string of charcters passed in, essential just return '0'

test cases:

data structure:
strings, regex replace, match

algorithm:
high-level: determine if the string matches the criteria, return a string of only numbers

1. ensure the string contains 10 || 11 digits, else return '0' - regex
2. if the string contains 11 digits, ensure the first digit is '1', else return '0' - brack notation, condition
3. delete all non-digit characters in the string - replace(regex)
4. return the string

regex:
1. 10 or 11 numeric digits
/(.*\d.*){10, 11}?/
*/

function cleanNumber(number) {
  const TenOrElevenDigits = /^([-(). ]*\d[-(). ]*){10,11}$/
  number = TenOrElevenDigits.test(number) ? number : '';
  number = number.replace(/[^\d]/g, '');

  if (number.length === 11) {
    number = number[0] !== '1' ? '0' : number.slice(1);
  } else if (!number) {
    number = '0';
  }

  return number;
}


console.log(cleanNumber('(842)-421-9090'));
console.log(cleanNumber('(21)-512-231'));
console.log(cleanNumber('1 (843)-521-3413'));
console.log(cleanNumber('5-213-211-0594'));
console.log(cleanNumber('21321();231312332132'));
console.log(cleanNumber('1 (843(-)52- 1-3413'));