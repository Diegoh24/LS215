/*
takes one argument - an arr with integers
returns the avg of all integers in the array,
- rounded down to the integer component of the average.
  - floor
  the arr will never be empty and the integer will always be positive

data - arr
algo-
reduce the arrays to a sum, divided by the length of the arr
then floor the result


*/

function average(arr) {
  console.log(Math.floor(arr.reduce((sum, num) => sum + num) / arr.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40