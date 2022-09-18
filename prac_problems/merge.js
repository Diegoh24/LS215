/*
takes 2 sorted arrays, and returns a new array that contains all the elements
from both input arrays in sorted order

You cannot sort eh result array, you must build the array one element at a time in the proper order
not mutate

input: 2 arrays that are already sorted
- return a new array that contains all the element from both input arrays in a sorted order

explicit:
return a new array where you build the elemetns one at a time

test cases:
[1, 5, 9], [2, 6, 8]
[1, 2, 5, 6, 8, 9]

[

implciit:
one of the arguments can be empty, either first or second
don't depend the indexes of either array, instead
instead just want to look at the values,

data structure: array, create a new arr..
since I just want to work with the values,
not concerned here with whether there are one or two arrays, im just concerned with the values themselves.
can one argument, this would produce nested arrays, i flatten it out
- as the values, definition

algo:

working with a collection of the values,

loop while the collection of vlaues has elements
- iterate through the collection, with an index
  find the minimum value,
    - use reduce, return the minum at each.
    - since the arrays are already sorted
- push the minimum value to the new array containing sorted elements.
- save the index.


-delete the element at the first matching element from either array1 or arary2
loop ends

return the collection of values.
*/
function merge(...values) {
  let sorted = []
  values = values.flat();

  while (values.some(element => element)) {
    let min = values.reduce((min, number) => min <= number ? min : number);
    let minIndex = values.indexOf(min);
    sorted.push(...values.splice(minIndex, 1));
  }

  console.log(sorted);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]