/*
takes an array of integers as input, multiplies all the integers together

- divides the result by the number of entries in the array
returns the result as a string,
value rounded to 3 places.


input: array of integers
output: a string rounde to 3 decimal palces

high - level
multiplies all the integers together, divides it by the number of elements,
return the number rounded to

*/

function showMultiplicativeAverage(arr) {
  console.log((arr.reduce((sum, num) => sum * num) / arr.length).toFixed(3))
}


showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"