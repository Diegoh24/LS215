/*
------------ **Explicit Requirements** -------------
Rules:
sort the function using bubble sort algo
bubble sort:
- makes multiple iterations through an arr
- on each pass, the two values of each pair of consecutive elements are compared
- if the first value is greater than the second, the two elements are swapped
- repeats until a complete pass is made without performing swaps
- indicating the arr is completely sorted.

Input:an array

Output: undefined
mutates the array

------------ **Implicit Requirements** -------------



------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
[5, 3]
[5, 3] -swap them

[6, 2, 7, 1, 4]
6 - 2 | 2, 6
6 - 7 | ..
7 - 1 | 1, 7
7 - 4 | 4, 7

2, 5, 1, 4, 7

2, 1, 4, 5,
second pass -



------------------ Data Structure ------------------
arr
-------------------- Algorithm ---------------------
set sort = true
loop while sort is true
  set sort = false
  - compare the element at current idx to the element at idx + 1;
  - if element is less than, keep element fixed,
  - if element element is greater than,
    - swap the elements
      set sort = true

**** helper functions ****

---------------------- Notes -----------------------
optimization
- as it iterates,

*/

function bubbleSort(arr) {
  let sort = true;
  while (sort) {
    sort = false;
    for (let idx = 0; idx < arr.length - 1; idx += 1) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        sort = true;
      }
    }
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]