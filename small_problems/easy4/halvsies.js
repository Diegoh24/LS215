/*
takes an array as an argument
return an array that contains two elements - each of which is two elements

put the first half of the original array elements in the first element of the return value,
second half as the scecond element

if the original array contains an odd number of elements, place the middle element in the firs thalf array.


data structure = array

algo:
if the length of the array is even,
set half = length / 1
return an arr, first element arr.slice(0, half), second element being arr.slice(half)

else
set half = Math.round(length / 2)
return an arr, first element being arr(0, half), second el arr.slice(half);
*/
function halvsies(arr) {
  let half = arr.length % 2 === 0 ? arr.length / 2 : Math.round(arr.length / 2);
  console.log([arr.slice(0, half), arr.slice(half)]);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]