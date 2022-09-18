/*
- rotates an array by mocing the first element to the end of the array
- if the input is not an array return undefined
if the input is an empty array, return an empty array

explicit:
- given an array,
- return a new array
  - the first element is moved to the end of the array


[7, 3, 5, 2, 0, 1]
3,5.......1, 7

['a', 'b' ,'c']
b ..c, 'a'

arr has only emeent, return a new array'

data stuct: arrays

algo:
check to see if the argument is an array, return false if not an array
return the arrayif it has no elements

make a duplicate of the array, to not mutate it
remove the first of the array and then push it to the copyArr.

*/

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (!arr.length) return arr;

//   return arr.slice(1).concat(array[0]);
// }

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]

// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));

// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// console.log(array);

/*
rotates the last n digits of number.
For the rotation, rotate by one digit to the left, moving the first digit to the end.

input: two arguments
- a numeric literal
- integer the represents the number of last n digits that will be rotated
- rotate by one digit to the left, moving the first digit to the end.
return value is a numeric literal

the second given integer represents the starting index, assuming it was a string
- repsents the string.length - 1; the substring that will be changed
- str.slice(str.length - (rotations))

  str.slice(
  5

  7352  19
  735 291, 3 --> 912
  , 4 rotations, 73 5291 --> 2915
  5 -> 7 35291 -> 752913
  6 ->

  represents the part of the substring that is being rotated and will change

  - what happens if the rotations is more than the number of digits?
  as long as the second argument is an integer, there should no problem

  data structure -string or array of digits,
  - what if the rotations is 0, return the digits

algo:

extract the last n digits from the str or arr
  str.slice(number of digits - rotations)
  slice the string again starting from index 0, append, concatenate, push the element or char at index 0 of the str or arr of chars
  join the string, explcitly coerce it a numeric litera


*/

function rotateRightmostDigits(digits, rightDigits) {
  digits = String(digits);
  let lDigits = digits.slice(0, digits.length - rightDigits);
  let rDigits = digits.slice(digits.length - rightDigits);
  return Number((lDigits + rDigits.slice(1) + rDigits[0]));
}

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917




/*
'213'
1 23
13 2



data structure : strings, slice the appropriat enumber of string, starting index (rotationNumber - 1)

algo
going to transformed the digits to a string, set that to digits
declare and initiale a result string to an empty sstring
105,
0 51

digits = 1
0 15 = digits


'01'
r = 1
*/

function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  console.log(number);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845