/*
------------ **Explicit Requirements** -------------
Rules:
computes the difference between
square of the sum of first n integers - sum of squares of first n integers



Input:
integer that represents the first n integers tha will be used to calculate the differenc

Output:
integer -difference between the square of the sum and sum of squares

------------ **Implicit Requirements** -------------
3,
1 2 3, sum -> square
-
123 square of each -> sum
------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
100, ->
------------------ Data Structure ------------------
arr of nums, to reduce
transform eaech num to the square, then sum
-------------------- Algorithm ---------------------
create an array containing a sequence of 1 up to and including n (unless n is 0)

set square of sum = square(sum(arr))
set sum of squares = sum(transform each arr to square)

return sq of sum - sum of sq


**** helper functions ****
sum - (given an arr) finds sum
reduce the arr

square (given a number) finds the square
num ** 2

---------------------- Notes -----------------------

*/
let square = number => number ** 2;
let sum = numbers => numbers.reduce((sum, num) => sum + num);

function sumSquareDifference(digits) {
  let sequence = Array(digits).fill(0).map((num, idx) => idx + 1);
  let squareOfSum = square(sum(sequence));
  let sumOfSquares = sum(sequence.map(num => square(num)));
  return squareOfSum - sumOfSquares;
}



sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150