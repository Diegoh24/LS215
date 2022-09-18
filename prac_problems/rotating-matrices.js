/*
a matrix can be represnted by an array of arrays

matrx = [
rrr
ccc
zzz = [z, z, z]
]

a 90 degree rotation of a matrix produces a new amtrix in which each side of the matrix
is rotated clockwise by 90 degrees
1 5 8
4 7 2
3 9 6

3 4 1
9 7 5
6 2 8

zzz = z
iii = i
yyy = y

-> 3 4 1

implicitly -
that elements in the rotated array, are the elements at index x
loop that goes from 0 to x, where x represents the max element of the row

yiz = [ y[0], i[0], z[0] ]
yiz = [ y[1], i[0], z[0]
yiz = [



a 90 degree rot of a non square matrix
3 4 1
9 7 5

9 3
7 4
5 1

iii = i
yyy = i

iy = y[0], i[0]
iy  y[1] , i[1]
iy  y[2], y[2]

9 3
7 4
5 1

implicitly -
that elements in the rotated array, are the elements at index x
loop that goes from 0 to x, where x rrepresents the max element of the row
- the 1st element of the first row becomes the first element of the row at the last index of the matrix
- the 2nd element of the first row becomes the 2nd element of the row at last index of the matrix - 1
-

yiz = [ y[0], i[0], z[0] ]

yiz = [ y[1], i[0], z[0]
yiz = [

- the elements are transformed, but not he elements of the outer array,,
- tranforming the elemtns of any of the nested arrays,

data structure: array,

algo:
transform the inner array, at each element, transform the element, passing in each element and index
  iterate over the matrix, create a new array where each element is the element at 'index'
  return the new array,
return the rotated array.

zzz = z
z[0], 0

z[1], 1
- y[1], i[1], z[1]

iii = i
yyy = y
 goes from 0 to x, where x represents the max element of the row

yiz = [ y[0], i[0], z[0] ]
yiz = [ y[1], i[1], z[1]
yiz = [


*/


const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];
/*

algo:
transform the inner array, at each element, transform the element, passing in each element and index
  iterate over the matrix, create a new array where each element is the element at index: 'index'
  return the new array,
return the rotated array.


*/
function rotate90(matrix) {
  return matrix[0].map((_, index) => [...matrix].reverse().map(row => row[index]));
}

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      //
