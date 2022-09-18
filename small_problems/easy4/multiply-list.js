/*

takes two array arguments
- each has numbers

return a new array that contains the product of each pair o numbers from the arguments
that have the same index
the arguments contain the same number of elements...


explicit:
return a new array with each subarray transformed to a sum,

implicit:
the sum is based on the elements in the other subarrays, at the same index

data struct : arr

algo:
reduce each element in the array to a sum
not the sum of the array itself, the sum of all the elements at the current index for the other sub arrays

reduce is not always the best option
understand the probelm, seriously!!!
*/

function multiplyList(...arr) {
  console.log(arr[0].map((_,index) => arr.reduce((total, num) => total * num[index], 1)));
}


multiplyList([3, 5, 7], [9, 10, 11], [1, 10, 100]);    // [27, 50, 77]