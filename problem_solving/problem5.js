/*
rail fence cipher

a transposition cipher that gets its name from the way in which it's encoded.

the message is written downwards on successive rails of an imaginary fence
then moving up when you get to the bottom
finally, the message is then read off in rows.

to decripty, take the zig zag shape and fill the ciphertext along the rows

the first row has seven spots that can be filled with
W E C R L T E

2nd row : E R D O EE F E A O C

3rd row: A I V D E N

the message is written on a zig zag:
- rails, fence, how many levels or rows should it have, is that specified, durin the method call,
- when the function is called does it just take a string argument> message to encrypt,
- the number of rows or the size of fence on which to encrypt the message:

make a static, if there are further requirements ill implement that....

implicit:
- the characters are separated by periods..
- all the characters on the first row, consist of the characters at index
0, 4, 8, 12, etc...
 123 567 91011

on the 2nd row,
the characters are the letters or characters at index
1 3 5 + 2, separated by a single dot

on the third row,
the characters at index: 3, 7, 10, 14

the top and the bottom row contain letters at index + 4, + 4


string, split into an arra characters
array, iterate over the array, index, with iter

data structure:
array of characters

algorithm:
helper function to return the approriate number of periods would be helpful
given a number, repeate and return a string.


- the characters are separated by periods..
- all the characters on the first row, consist of the characters at index
0, 4, 8, 12, etc...
 123 567 91011

on the 2nd row,
the characters are the letters or characters at index
1 3 5 + 2, separated by a single dot

on the third row,
the characters at index: 3, 7, 10, 14

make 3 separate arrays, each contaings the characters that will go on the given or row, OR

define 3 constants, and as I iterate over the array, see if the index % constant ==== 0
anything that doesn't equate to 0, given top or bottom constant that will be used as the second operand
in a modulo, would just be a middle row.

1. 0 4  index % 4 === 0 OR 0
3.
2. else,

clean the string, obtaining only alphabetic characters - replace
- make the all uppercase

- make an array for each row,

TOP
select all the elements whose index === 0 or index % 4 === 0; join the character by 3 dots

helper method (number), see if it fits the pattern.
iterate starting from 2, adding 4 at each

MIDDLE
select all the elements that fall under the pattern +2, starting at 1..  join with a period, prepend and append aperiod

BOTTOM
select al element whos index falls under the pattern +4, starting 2
join the elements with 3 dots, prepend and append 2 dots.

helper method: (startInteger, endNumber, pattern + 2), computes the
set current num = start
from the start, until the number is equal to the end Number, while its less than or equal
- perform the operation, num + pattern, add that to an array.

return the array
*/
function railFenceCipher(message) {
  const size = message.length
  const TOP = getLetterPositions(0, size, 4);
  const MIDDLE = getLetterPositions(1, size, 2);
  const BOTTOM = getLetterPositions(2, size, 4);

  let chars = message.toUpperCase().replace(/[^A-Z]/g, '').split('');
  let topLetters = chars.filter((char, index) => TOP.includes(index)).join(makeDots(3));
  let middleLetters = chars.filter((char, index) => MIDDLE.includes(index)).join(makeDots(1));
  let bottomLetters = chars.filter((char, index) => BOTTOM.includes(index)).join(makeDots(3));

  console.log(topLetters);
  console.log(makeDots(1) + middleLetters + makeDots(1));
  console.log(makeDots(2) + bottomLetters + makeDots(2));
}

function getLetterPositions(start, end, pattern) {
 let positions = []
 for (let number = start; number <= end; number += pattern) {
    positions.push(number);
 }

 return positions;
}

function makeDots(count) {
  return '.'.repeat(count);
}


console.log(railFenceCipher('Can you read this'));

console.log(railFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN'));