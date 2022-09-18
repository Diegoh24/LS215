/*
takes two arrays
returns a new arrays that contains all elements from
both array argumetns, with each element taken in alternation

- arrays are both not empty,
both have the same numebrs of arguments

data struc: arr

algo:
first element is from the first, arrray, next element is from the other array,

reduce tha array to a new array, pass in each element an index,
at each iteration add the element to the index then add the element at 'index' in the second argument


*/

function interleave(arr1, arr2) {
  // return arr1.reduce((newArr, element, index) => {
  //   newArr.push(element, arr2[index]);
  //   return newArr;
  // }, []);

  return arr1.flatMap((ele, index) => [ele, arr2[index]])
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


function interleave(...array) {
  return array[0].flatMap((_, colIndex) => array.map(row => row[colIndex]));
}

console.log(interleave([1, 2, 3], ['xxxx', 'zzzz', 'dddd'], ['a', 'z', 'c', 'g']));