/*
--------------------- Problem ----------------------
consider a character set consisting of letters, a space, and a point
words consist of one or more but at most 20 letters.

An input tests consist of one or more words separateed from each other
by one or more spaces and terminated by zero or more spaces followed by
a point. The output text is to be produced such that successive words are
separrated by a single space with the last word being terminated by a single point

odd words are copied in reverse order while even words
are merely echoed.

------------ **Explicit Requirements** -------------
-  Rules:
- given a character se
  can have: letters, space, point
- the words consists of onre or more but at most 20 letters
- even words are not change
- odd words are reversed
- the words will be hoined by a single space character as a delimiter
- the last character will be a point.

- Inputs:
 - consists of one or more words separated from each other by one or more spaces


- Output:
- the words delimited by one space character and the last character being a point.
- even words are not changed, odd words are reversed

------------ **Implicit Requirements** -------------
- looks as if the input will all be lowercase chars..
- it could contain uppercase chars.
- should i preserve case,
- preserve case for the characters
- selecting only the valid words delimieted by one or more space, concat a period
- quotes will be reversed, while commas will not  ,;()
------------- **Clarifying Questions** -------------

- case should be preserved, reversing the chars, cleaning up the string
- delimiting it with single spaces,
- do the quotes count as part of the word?
- ill count it as a word, quote is still a relevant character.
- preserve quotes.
- preserve commas.
- preserve quotes
,
- preserve punctuation ??? such as commas
------------ Examples/Test Cases/Edge's ------------
-  whats the matter with kansas.
-> whats eht matter ht1w kansas.
-> invalid input, such as numbers
------------------ Data Structure ------------------
string, - split the string by space characters
array - match regex,


-------------------- Algorithm ---------------------
high-level:
get an array of words,
reverse the odd words (words at odd index)
join the arra with a single space delimiter, return the array

low-level
get an array of words, delimited by one or spaces using a regex
preserving commas and quotes
  - array of words, will be words that can have punctation.

iterate over each word in the array with index (transformation)
  if the index is odd
  - within each owrd, match any sequence of chars that is not ,;()
  - replace each sequence with a reversed sequence of characters
    - helper function reverse


join the mapped array with a single space delimiter
check if the final word has punctation, if it does return as is, otherwise return
a concatenation of the string with a period

              **** helper functions ****
  reverse word
    given a string that represents a word - all letters
    split it into an array of characters
    -reverse the array
    join the array with ''
    return the word
*/

function oddReverse(text) {
  let words = text.match(/[a-z,;'()"]+/gi)
  words = words.map((word, idx) => {
    return idx % 2 === 1 ? word.replace(/[^,'()]+/gi, reverseWord) : word;
  }).join(' ');
  let punctation = [...text].pop();

  return /[!.?]/.test(punctation) ? words + punctation : words + '.'
}

let reverseWord = word => [...word].reverse().join('');

console.log(oddReverse('whats the matter with kansas'));
console.log(oddReverse('WhAts      thE matteR with Kansas'));
console.log(oddReverse('what. the matter with kansas'));
console.log(oddReverse('what\'s the matter with Kansas'));
console.log(oddReverse('What\s the, matter, with Kansas!'));

