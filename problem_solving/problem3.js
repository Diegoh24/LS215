/*
a collection of spelling blocks has two letter per block

limits the words you can spell with the blocks to only words
that do not use both letters from any given block
you can also only use each block one

input: a string
output a boolean, true if it conforms the the above rules, and false if it doesn't

the letters are case-insensitive,

explicit:
- given a collection consisting of a subcollection where each subcollection contains two letters
- a word can only use a subcollection once
- a word can only use one letter from the subcollection
- string is case insensitive

implicit:
- the string cannot be more than 13 characters.
- if the string is greater than 13 characters,
- any non alphabetic characters are legal.

the block consist of two letters:

a letter, and another letter at the first letters char code + 13
block
[letter.charCodeAt(), String.fromCharCode(letter.charCodeAt() + 13)

that means it either used a block more than once

howt do handle invalid input??
- impli

date structure: strings:
- use the char code,

algorithm,
create an array that contains the character codes of the used block

iterate over each character in the string
- obtain the charCode of the current character
- return false if the array contains the charCode of the current character
- add to the array usedCharCode the current charCode and the currentCharCode, ensure that the characters are in order

-
return false



*/

function isBlockWord(string) {
  let usedCharCodes = []
  let chars = string.toLowerCase().match(/[a-z]/g).sort();

  for (let index = 0; index < chars.length; index += 1) {
    let charCode = chars[index].charCodeAt();
    if (usedCharCodes.includes(charCode)) return false;
    usedCharCodes.push(charCode, charCode + 13);
  }

  return true
}

console.log(isBlockWord('20132112...  . .BAT 213CH'));
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true