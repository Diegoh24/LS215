/*

------------ **Explicit Requirements** -------------
Rules:
equilateral - 3 sides are equal
isosceles - 2 sides are equal
scalene - no sides are equal

valid triangle -
sums of 2 shortest sides > length of longest
every side must be > 0

Input:
3 sides, 3 integers

Output:
returns a string describing the triangle
equilateral
isosceles
scalene
invalid
------------ **Implicit Requirements** -------------
the integers can be fractional, that's valid
------------- **Clarifying Questions** -------------
invalid input, negative numbers?
NaN, Infinity,
------------ Examples/Test Cases/Edge's ------------
------------------ Data Structure ------------------
capture the elements as arrays, sort it,

-------------------- Algorithm ---------------------
capture the elements as a collection
sort the collection
sum the elements at index 0 and 1, if greater than the last element return invalid
return invalid if any of elements is 0

if the the last eleemnt is equal to the first element, return equilateral
if there are any repeating elements, return isosceles
else return scalene

---------------------- Notes -----------------------

*/
function triangle(...sides) {
  if (!sides.sort().every(side => side)) return 'invalid';
  if (sides[0] + sides[1] <= sides[2]) return 'invalid';

  if (sides[0] === sides[2])
    return 'equilateral';
  else if (sides.some((side, idx) => idx !== sides.lastIndexOf(side)))
    return 'isosceles';
  else
    return 'scalene';
}

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"