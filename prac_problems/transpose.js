/*
A 3x3 matrix can be represented by an array of arrays:
an outer array containing three subarrays that each contain three elements.
3x3 matrix:

- a matrix that results from exchanging the rows and columns of the original matrix

exchange the rows and columns


data structure: array

algorithm:


iii = a
yyy = b
zzz = c

iyz = a[0], b[0], c[0]
iyz
iyz

iii



from each array transforming the subarray, represents a row into a column
- given a subarray, representing a row,
- transform the array into an array with all the elements representing an element from the other arrays
at index x

iterate over the array, operating on each nested array performing transformation, index
- transform the array into an array containing all the elements at index 0 for the array
  - iterate over the main array, transform each element into the element at index x -represent the current
      of the OUTER iteration
  - return the transformed array of 3 digits,
-return the transformed outer array

*/
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
]

function transpose(matrix) {
  return matrix.map((row, index) => matrix.map(row => row[index]));
}

console.log(transpose(matrix));
// [[1, 4, 3], [5, 7, 9] [8, 2, 6][
//

/*
matrix can be transposed simple by switching
columns with rows.

modify the transpose funciton so that it works with any MxN matrix with at least one row one column

r x c

rrrrr = a
ccccc = b

=>
a

a[1], b[1]
rc

rc
cc
*/

// function transpose(matrix) {
//   let transposed = []
//   for(let row = 0; row < matrix[0].length; row += 1) {
//     transposed.push(matrix.map(innerRow => innerRow[row]));
//   }

//   console.log(transposed);
// }

function transpose(matrix) {
  return matrix[0].map((row, index) => matrix.map(row => row[index]));
}


transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
