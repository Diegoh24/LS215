/*
------------ **Explicit Requirements** -------------
write a function that displays an 8 pointed start in
an n * n grid


Rules:
the smallest star needed to handle is 7,
the stars have to be off
8 pointed star
Input:
an integer `n`
- represents the size of the grid n * n


Output:
------------ **Implicit Requirements** -------------
given the integer 9:
          SPACES the the gridSize - the number of stars

maxLeading = 6 / 2 = 3 -max leading - increment from 0 up to 3, down to 0,
the exact same pattern, except reversed.

leading and between spaces have an inverse relationship
0, 1, 2, 3
3, 2, 1, 0

row,
0 - 9
[0 --- maxConsecutiveSpaces] - represent the spaces
stars -

stars: 3 |leading: 0, between: 3, 3 = 6
stars: 3 |leading: 1, between 2, 2 + 2 = 4
stars: 3 |leading: 2, between 1, 1 + 1 = 2
stars: 3 |leading: 3, between 0 spaces

middle row: all stars (9) -easy case
stars: 3 |leading: 3, between: 0
stars: 3 |leading: 2, beweeen: 1 + 1 = 2
stars: 3 |leading: 1, beween: 2 + 2 = 4
stars: 3 |leading: 0, between: 3 + 3 = 6


given the integer 7:
          SPACES

,max leading spaces = gridSize - stars / 2
4 / 2 - MAX LEADING STARS

stars: 3 |leading: 0
stars: 3 |leading: 1
stars: 3 |leading: 2
middle row: all stars (9) -easy case
stars: 3 |leading: 2
stars: 3 |leading: 1
stars: 3 |leading: 0



the integer provided has to ba an odd number

------------- **Clarifying Questions** -------------
assume input will always be ok (durin
ASk questions, test the edge cases MROE, make sure
------------ Examples/Test Cases/Edge's ------------
------------------ Data Structure ------------------
str,
arr, represent the spaces

-------------------- Algorithm ---------------------
make an array of the maxConsecutiveSpaces,
  - containing digits from 0 upto the (gridSize - 3) / 2

make an arr called leading spaces and set it to a copy of the spacesARr
make arr called spaced between and set it to ta copy of the spaces.ARR, then reverse it


constant is the same array, except in reverse order,
the same 2 arrays,
MAX = STARS = 3,

iterating over the other array, switching arrays themselved,



iteate from idx 0 to maxIDX of spacesAR<
repeat space by time, where times is the integer at idx (currentIDX) from leading spaced
repeat spaces by x times, x == integer betweenSpaced[currentIdx]


iterate over the array,

iteate from idx 0 to maxIDX of spacesAR<, ewcweaw
repeat space by time, where times is the integer at idx (currentIDX) from leading spaced
repeat spaces by x times, x == integer betweenSpaced[currentIdx]


middle row,

**** helper functions ****
makeSpaces(leading spaces, betweenSpaces);
  - iteate from idx 0 to maxIDX of spacesArr
  -repeat space by x, x is the integer at idx (currentIDX) from leading spaces
  -print 1 star
  - epeat spaces by x times, x == integer betweenSpaced[currentIdx]
  print
  -print 1 star

  - repeat spaces byx time, x is the integer at the currentIDx of betweenSpaces

  -print 1 star

---------------------- Notes -----------------------
*/



/*
make an array of the maxConsecutiveSpaces,
  - containing digits from 0 upto the (gridSize - 3) / 2

make an arr called leading spaces and set it to a copy of the spacesARr
make arr called spaced between and set it to ta copy of the spaces.ARR, then reverse it


constant is the same array, except in reverse order,
the same 2 arrays,
MAX = STARS = 3,

iterating over the other array, switching arrays themselved,

*/
const STARS = 3;

function makeHalf(leadingSpaces, betweenSpaces) {
  let half = ''

  for (let idx = 0; idx < leadingSpaces.length; idx += 1) {
    half  += ' '.repeat(leadingSpaces[idx]) + '*';
    half += ' '.repeat(betweenSpaces[idx]) + '*';
    half += ' '.repeat(betweenSpaces[idx]) + '*';
    half += '\n';
  }

  return half;
}

function star(gridSize) {
  let maxSpaces = (gridSize - STARS) / 2;
  let spaces = Array(maxSpaces + 1).fill(0).map((row, idx) => idx);
  let inSpaces = spaces.slice().reverse()

  let starGrid = ''
  starGrid += makeHalf(spaces, inSpaces);
  starGrid += '*'.repeat(gridSize) + '\n';
  starGrid += makeHalf(inSpaces, spaces);
  return starGrid;
}

console.log(star(7));

console.log('');
console.log(star(9));
// logs


// console.log(makeHalf([3, 2, 1, 0], [0, 1, 2, 3]));