/*
list of numbers in a short-hand range


given this pattern,
return a list of complete numbers.
the possible seprators are - : ..

test cases:

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
1 3 7 -> when the number after is less than the current number, it represent a
larger value, (tens place  ( + 10


the numbers are separated by a comma.
given a string. that represents a range
"1-3, 1-2" --> 1, 2, 3, 11, 12
1-3, 1-2
1:3, 1:2
1..3, 1..2

1, 2, 3, +10 11, 12
ramges are inclusive.



"1:5:2" -->  1, 2, 3, 4, 5, 6, ... 12
1:5:2 - 1, 2, 3, 4, 5  12
5:2 -> 5, 6, 7...,11,12
implicit:

a range where the 1st number is greater than the second number:
- increment up until the last digit of the number
is equal to the second number in range

"104-2" --> 104, 105, ... 112
104-2
104-2
104, 105, 106, 107... 112


"104-02" --> 104, 105, ... 202
- when any of the subsequent ranges are prepended by a 0, + 100
104 .. 150..190..202
104..02..60

increment until the last digit or digits of number
equal the digit or digits of the last number in current range

the number of integers in the range, is the number of digits to search
in the number..


"545, 64:11" --> 545, 564, 565, .. 611
545, 50
increment, but don't include the number, until the number's
last 2 digits (since the range consist of 2 digits) match the range
564 - increment until the last 2 digtis (bc there's 2 digits in the range)
of the number match the number 11
564...6111

working with a string. -

data structure:







- work with an array, use a delimite to split the strings into the
relavant numbers. split the commas.
have an array of the relevant numbers (split by comma)

another variable start would equal,
first element in the array is a number, set it to the number
else to the first digits before the separated
split the array, slice using the result from search..


iterate
if the number does not include a seperator that indicates a range
if the number is less than the previous number in the range..
- add the number itself to array of numbers
- set the current number to last element of the array of numbers

- if  string number contains a separator,
  -call rangeTonumbers(start = currentNumber, endDigits)
  - return an array, add each element in the array to the current array of numbers

- return the object containing the numbers


helper - start nmber, the endDigits
-set an empty array
increment, starting from start
- add each number in the array
- if str.slice(str.length - endDigits.length) === endDeigits break

return the array

*/
const separators = /[.]{2}|[:\-]/

function rangeNumbers(range) {
  let rangeDigits = range.split(',').map(d => separators.test(d) ? d : Number(d));

  return rangeDigits.reduce((digits, digit) => {
    digit = separators.test(digit) ? rangeToDigits(digits, digit) : digit;
    let previousDigit = digits[digits.length - 1] || 0;

    if (Number(digit) === digit && previousDigit > digit) {
      digit = nextDigit(previousDigit, digit);
    }

    return digits.concat(digit);
  }, []);
}

function nextDigit(start, end) {
 while (true) {
    start = Number(start) + 1;
    let [strStart, strEnd] = [String(start), String(end)];
    let lastNDigits = strStart.slice(strStart.length - strEnd.length);
    if (lastNDigits === strEnd) return start;
  }
}

function rangeToDigits(digits, range) {
  range = range.split(separators);
  let lastDigit = digits[digits.length - 1];
  if (lastDigit) range[0] = nextDigit(lastDigit, range[0]);

  return range.reduce((digits, currentBoundary, index, range) => {
    if (index !== range.length - 1) {
      let nextBoundary = nextDigit(currentBoundary, range[index + 1]);

      for (let number = Number(currentBoundary); number <= nextBoundary; number += 1) {
        digits.push(number);
      }
    }

    return digits.filter((digit, index) => digits[index - 1] !== digit);
  }, []);
}
  // iterate over each number in the range,
  // deduce all the digits between num num1, and num1, and if there are more, determine the other ranges as well,
  //
//   let rangeNumbers = []
//   let last = range.split(separators)[1];
 // because the ranges connect, you don't have to keep track of the current digit, just look at the array of digits.


  // while(end.length) {
  //   rangeNumbers.push(start);
  //   start = String(start);
  //   if (start.slice(start.length - last.length) === last) break;
  //   start = Number(start) + 1;
  // }

  // return rangeNumbers
// }


console.log(rangeNumbers("1, 3, 7, 2, 4, 1"));
console.log(rangeNumbers("104-2"));
console.log(rangeNumbers("1:5:2"));
console.log(rangeNumbers("104-2"));
console.log(rangeNumbers("104-02"));
console.log(rangeNumbers("545,64:11"));