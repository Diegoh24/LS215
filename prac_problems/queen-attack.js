/*
--------------------- Problem ----------------------
in the game of chess, a queen can attack pieces which are on
the same row, column or diaogonal

positions on the board equate to coordinate numbers

given a set up like so

--------
8 rows and 8 columns
8 x 8 grid
0 1 2 3 4 5 6 7
_ _ _ _ _ _ _ _  0
_ _ _ _ _ _ _ _  1
_ _ _ W _ _ _ _  2
_ _ _ _ _ _ _ _  3
_ _ _ _ _ _ _ _  4
_ _ _ _ _ _ B _  5
_ _ _ _ _ _ _ _  6
_ _ _ _ _ _ _ _  7

-1 +1

queen on [7, 2]
6 3
5 4

grid by an array of arrays,

------------ **Explicit Requirements** -------------
-  Rules:
function takes a given string representation of the baord with 2 queens
the function takes a string
 - queen can attack a character that sits in the same row or in the same column
 - as well as diagonal

- Inputs:
a string that represent the board with the use of space and new line delimieters
- Output:
a boolean indicated if the two weens on the board can attack other other...


------------ **Implicit Requirements** -------------
- the underscore represents a square
- the squares are delimited by spaced on each row
- the rows are delimited by new line \n
- there will only be 2 pieces on the board, the W represents white queen the b represent black
- diagonal
  - b - [5, 6] - [4, 7]


    can attack chars at [6, 7], [5, 6], [4, 7]. [4, 5] -> [2, 3]
    - [5, 6] [6, 7]
    -1 : [4, 5], [3, 4], [2, 3]

    if the absolute val of the difference between 2 element in an array is equal to
    the abs value of the array that represents the square where the queen is positions are equal,
    the return true

    another condition, [5, 6] - [-1, +1];
    make arra that contains these diagonal sequares,

    take the difference between the 2, then abs of the difference,

------------- **Clarifying Questions** -------------
- will queens always be on the board
------------ Examples/Test Cases/Edge's ------------
-  Visual Reference:

------------------ Data Structure ------------------
represent the rows as nested columnw tihin an array
-------------------- Algorithm ---------------------

high-level
get a matrix of the board,
check the position of both queens
see if they match diagonally, vertically, or horizontally return true
return boolean

lower:
split the string into rows delimited by new lines
iterate over the array, find the positions of the queens
check if the queen positions lie in the same nested array,
-  they have the same row, square[0], where square is an array with their position

echeck if they lie in the same column
- return true if the have the same second index in the square arr representing their positons

check if the queen positions are digaonal,
- return true

return falsee

              **** helper functions ****
diagonal? (position of queen1 attacking, position of queen2)
return true if the abs val of the difference of both arrays is equal

make the array containing the oddDiagonals,
make a copy of queen1s positions
loop while queen1 row and col positions are less than 7,
decrement the row, increment the column

return a boolean indicating if queen2's position equals any of the squares in the oddDiagonals arr

---------------------- Notes -----------------------

*/
function queenAttack(board) {
  board = board.split('\n').map(row => row.split(' '));
  return board;
  let queens = board.flatMap((row, rowIdx => {
    row.some(square => /[A-Z]/.test(square)) ? console.log(row) : '';
  });
}


const boardDiagonal = '_ _ _ _ _ _ _ _' + '\n' +
                      '_ _ _ _ _ _ _ _' + '\n' +
                      '_ _ _ W _ _ _ _' + '\n' +
                      '_ _ _ _ _ _ _ _' + '\n' +
                      '_ _ _ _ _ _ _ _' + '\n' +
                      '_ _ _ _ _ _ B _' + '\n' +
                      '_ _ _ _ _ _ _ _' + '\n';

const boardRow = '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ W _ _ B _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n';


const boardCol = '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ W _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ B _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n';

const boardFalse = '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ W _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n' +
              '_ _ _ _ _ B _ _' + '\n' +
              '_ _ _ _ _ _ _ _' + '\n';

console.log(queenAttack(boardDiagonal));
console.log(queenAttack(boardRow));
console.log(queenAttack(boardCol));
console.log(queenAttack(boardFalse));

//console.log(queenAttack(board));