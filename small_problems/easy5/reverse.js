/*
take a positive integer
returns the number with digits reversed.

data struct : string an arr

algo
turn the integer into a string then an array of digits, reverse itt
stored in var - digits

map the digits back into numbers and join
delete every comma
transform the string into a number

join the digits, turn the string into a unmber

- delete any leading zeros

*/

function reverseNumber(digits) {
 console.log(Number([...String(digits)].reverse().join('')));
 console.log(+[...String(digits)].reverse().join(''));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1