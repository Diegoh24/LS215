/*

takes one argument, a positive integer, and returns a list of digits in the number

input: an integer
output, a list of digits in the number

work with strings, split it into digits.

*/

let digitList = (...digits) => console.log([...String(digits)].map(Number));

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]