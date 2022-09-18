
/*
two integers
- first is the count
- second is the starting number of a seq your func will create

the function should return an array containing the same number of elements
as count.
each element is amultiple of the starting number.

explicit:
return a new array with `count` elements
each element is a multiple of start

algo:
arrays,

loop while count > 0,
if the arr to be returned is empty,
  push base to the arr
else
  push base plus the value of the last element in the array


*/
function sequence(count, base) {
  let newArr = []
  for (; count > 0; count -=1) {
    newArr.some(Number) ? newArr.push(newArr[newArr.length - 1] + base) : newArr.push(base);
  }
  console.log(newArr);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []