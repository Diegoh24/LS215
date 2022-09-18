/*
input: two arrays
output: array containing the union of the values
there should be no duplication
-input is always arrays

data structure:
array

algo:
merge the elements,

*/

// function union(arr1, arr2) {
//   return arr1.concat(arr2).filter((num, idx, arr) => arr.lastIndexOf(num) === idx);
// }

function union(...args) {
  // return [...new Set(args.flat())];
  return [...new Set(args.flat())];
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]