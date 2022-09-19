/*
--------------------- Problem ----------------------
takes a sentence string as an argument
------------ **Explicit Requirements** -------------
-  Rules:

- Inputs:
sent sring

- Output:
returns the string with every occurence of a number word
converted to its corresponding digit char
------------ **Implicit Requirements** -------------
- the other characters in the string are left unchanged
- punctuation is preserved, and case is preserved
- preserve case
------------- **Clarifying Questions** -------------
- can the words be uppercase, or contain varying case
- make
------------ Examples/Test Cases/Edge's ------------
- any number word 'one'...'nine' replaced with a string representation of the number literal
------------------ Data Structure ------------------
- use an array to contain the number words 'one'...'nine'

preserved case, if i use strings, case can be preserved

using array, I can split the sentence into an arr of words
- with each word, replace the word with a index of the word as it appears in number words arrr

-------------------- Algorithm ---------------------
create number words arr from 'zero' to 'nine', the idx of the word in the arr, will be
the number char that will replace it
create a regex that has all the number words and matches the wnumber words case insensitive

replace all patterns that match the regex (numberWords) with the its index in the numberWords arr


split the sentence into an arr of words
transform each word, iterate

    - retrieve the number word from the arr
    - replace the word in the current element (word), that matches the number word
      with the index of the number word in the number words arr

join the arr delimited by a single space.
              **** helper functions ****

---------------------- Notes -----------------------

*/
function wordToDigit(sentence) {
  let numberWords = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let getDigit = number => numberWords.indexOf(number.toLowerCase());
  return sentence.replace(new RegExp(numberWords.join('|'), 'gi'), getDigit);

}

console.log(wordToDigit('Please call me at five ONE five one two thReE four. Thanks.'));
console.log(wordToDigit('Please call me at five five Five one two three four. Thanks.'));
console.log(wordToDigit('Please call me at five, five Five one two three four. Thanks.'));
console.log(wordToDigit('Please call me at (five five Five)-one two three-four. Thanks.'));

// "Please call me at 5 5 5 1 2 3 4. Thanks."