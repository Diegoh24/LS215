/*
takes an argument,
integer

if arg positive, return the negative

if the argumnet is a negative, return as is.

data nums

algo
check if the current number is negative.
- if the number is neg and multiplied by - 1, it would return the positive
so if num * - 1 === num, then return as is, otherwise, return num * -1

*/

function negative(num) {
  return Math.abs(num) * -1
}


negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
negative(-0);