/*
input: integer arg
output: array containing all integers between 1 and the argument


*/

function sequence(max) {
 let result = []
 for (let number = 1; number <= max; number += 1) {
   result.push(number);
 }
 console.log(result);
}
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]