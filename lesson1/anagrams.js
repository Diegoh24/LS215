/*
input: word and array of words
return an array that contains all the words from the array argument
that are anagrams of the word argument


array of words
filter the array of words that are anagrams
at each iteration, resolve whether all the characters in the word are in the word argument
return the array of words

*/

function charCounts(word) {
  return word.split('').reduce((charCounts, char) => {
    charCounts[char] ? charCounts[char] += 1 : charCounts[char] = 1;
    return charCounts;
  }, {});
}

function anagram(word, list) {
  let wordCharCounts = charCounts(word);

  return list.filter(currentWord => {
    let currentWordCharCounts = charCounts(currentWord);
    let chars = Object.keys(currentWordCharCounts);
    return chars.every(char => wordCharCounts[char] === currentWordCharCounts[char]);
  });
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]