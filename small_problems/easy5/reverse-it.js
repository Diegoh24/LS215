function reverseWords(string) {
  console.log(string.split(' ')
               .map(word => [...word].reverse().join(''))
               .join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"


function reverseSentence(string) {
  console.log(string.split(' ').reverse().join(' '));
}
/*
input: string,
output: new str containing the words from the string argument in reverse order

implicit:
spaces are preserved,
case is preserved

data : arra of chars
algo
split the string into an array of words, delimited by a space
transform each word string in the arr to its reversed counterpart,
join the words with a space
*/
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"