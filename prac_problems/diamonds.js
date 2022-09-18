/*
n x n grid

n is a odd integer supplied as an argumen to the function

assume that the argument will always be an odd integer

input: an odd integer - always odd
output is a diamond on a n x n grid.

explicit:
- given an odd integer argument,


implicit:
the number of rows will be equal to the integer argument
  - each row will have leading spaces, but no trailing spaces
    spaces is decrementing down from 1 less than the half of the integer provided until 0,
    then increments until it hits 1 lesss than the half
    print the appproitate number of spaces

  d(9) - [4, 3, 2, 1, 0, 1, 2, 3, 4] - represents the number of leading spaces
  - each row will have an appropriate number of stars.
  - starts from 1 increments by 2, untilt it is equal to the integer provided,
    then decrements by 2 until it is equal to the 1

  d(9) - [1, 3, 5, 7, 9, 7, 5, 3, 1] - number of stars
  -

data structure: arrays,

algo:

helper getPAtternArray
- both arrays use the starting number as the start and the sstop point,
- increment by x for each until it reaches a certain number (0), (stars)
- then decrement by x once it reaches the midpoint,
- end once the integer is equal to the starting number
-


create an array containing all the number of leading spaces for each row - spaces

create an array containing the number of stars for each row - stars

loop from 0 to 1 less than the integer provided,
  log spaces * number of spaces for the row spaces[currentIndex]
  log the stars * stars[row]
end

[1, 3, 5, 7, 9, 7, 5, 3, 1]
[4, 3, 2, 1, 0, 1, 2, 3, 4]
*/
function patternSequence(start, midpoint, pattern) {
  let sequence = [start];

  for (let number = start + pattern; number !== start; number += pattern) {
    sequence.push(number);
    if (sequence[sequence.length - 1] === midpoint) {
      pattern = -pattern;
    }
  }
  sequence.push(start);

  return sequence
}

function diamond(stars) {
  let half = Math.round(stars / 2) - 1
  if (half <= 0) return '*';

  let spaces = patternSequence(half, 0, -1)
  let starCounts = patternSequence(1, stars, 2)

  for (let row = 0; row < stars; row += 1) {
    let spacesBetween = starCounts[row] - 2 > 0 ? starCounts[row] - 2 : 0;
    let rowString = ' '.repeat(spaces[row]) + '*' + ' '.repeat(spacesBetween)
    if (starCounts[row] !== 1) rowString += '*'
    console.log(rowString);
  }
}

// function diamond(size) {
//   if (typeof size !== "number" || size % 2 === 0) return;

//   let stars = 1;
//   let spaces = (size - stars) / 2;
//   let incrementing = true;

//   for (let i = 1; i <= size; i += 1) {
//     console.log(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces));
//     if (stars < size && incrementing) {
//       stars += 2;
//     } else {
//       incrementing = false;
//       stars -= 2;
//     }
//     spaces = (size - stars) / 2;
//   }
// }

function diamond(size) {
  let stars = 1;
  let spaces = (size - stars) / 2;
  let incrementing = true;

  for (let i = 1; i <= size; i += 1) {

    let spacesBetween = stars > 1 ? stars - 2 : 0;
    let rowString = ' '.repeat(spaces) + '*' + ' '.repeat(spacesBetween);
    if (stars > 1) rowString += '*';
    console.log(rowString);

    if (stars < size && incrementing) {
      stars += 2;
    } else {
      incrementing = false;
      stars -= 2
    }
    spaces = (size - stars) / 2;
  }
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));