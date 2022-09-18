/*
merge sort
- a recursive sorting algorithm that works by breaking down
an array's elements into nested subarrays,

then combining those nested subarrays back together in sorted order
[9, 5, 7, 1]
[[9, 5], [7, 1]]
[ x, y]

[[[9], [5]], [[7], [1]]]
[
[[x[1]], [x[0]],
[[y[0]], [y[1]]]
]

work your way back to a flat array by merging each pair
of nested subarrays back together in the proper order:

input: an array argument
output: a new array that contains the values from the input array in sorted order

the function should sort the array using the merge sort algo de
all the arrays will be the same data type

breaks down the elements into nested subarrays, then combines those nested subarrays back together in sorted order
essentiall it splits the arrays down to the point where each element is its own array.
[1, 2, 3]

get the halves of the array -
- half point of any even array is just the half - 1, but since going to be slicing the arrya,
- slice it from the half, length / 2 ,the last index is exlcusive.
half point
implicitly, need a half point
need to return the value result of merging the two elements

return array if the length of the array is 1 and it only has one element that is not an array,
- contains only one element

return mergeSort() + mergeSort()
arr.slice the arr starting at index 0 up to and exlcuding the half,
arr.slice the arr starting at half

algo:
get the half point of the arrays, if the array is even
the half is length / 2

return the array if the length of the array is one and the element the array is not an array

merge(mergeSort(arr.slice(o, half)), mergeSort(arr.slice(half)))
if the length of the arr is odd

- [[1, 2] [3]]
-
adding the return value of recursively calling the function until the array has only element, until array size has only 1 element


*/
function mergeSort(array) {
  if (array.length === 1) return array;
  let half =  array.length / 2;
  return merge(mergeSort(array.slice(0, half)), mergeSort(array.slice(half)));
}


console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

function merge(...values) {
  let sorted = []
  values = values.flat();

  while (values.some(element => element)) {
    let min = values.reduce((min, number) => min <= number ? min : number);
    let minIndex = values.indexOf(min);
    sorted.push(...values.splice(minIndex, 1));
  }

  return sorted;
}