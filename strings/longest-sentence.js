
let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';
/*

determine the sentence with the most words.
sentences delimited by . ! ?
sentences always begin with a word character.

treat any sequence of characters that are not spaces or sentence-ending characeters
as a word.
Log the longest sentence and its word count to the console.


steps:
given a string of text
get a list of the sentences, use the match method to return the groups capture by a regex
- the regex will be a pattern of delimieters ! ? .
-split the string based on the delimiter


use match? /\b[^.!?]+/
- additionally, the sentence must begin with a word character.

- use the match method with the regex /^\w+

once you have an array of all the sentence, you can sort the array
on the criteria that is the number of words in the array.
every element in a string that represents a sentence,
 - split the sentece into relevant words,
 - match /\b\w+\b





 sort, iterate over each,
 compare the word counts of each, based on that condition,
 passing in two different variables,
 perform a similar operation on each variable,
 baed on the words in the sentence, compares, return an integer. this would mutate....

 - extract the longest string from the array, etc etc.

 return 0, -1 ,1


 map - transform each element into the word count store it in a new array
 the indexecs are the same, so you could just use the index of the longest integer.
 that same index you used in brack notation to access the longest string from the sentences

  reduce - iterate over each word, pass in an accum,
 the accum could be an object, or an integer
 - deduce the word count for each string
 - compare it to the current accum, the return val of the previous callback
 - if the current word count is greater, reassign the accum,
 - actually return the sentence..

instead of using an integer,
use an object, at each iteration
compare the wordCount property,
the sentence itself

*/



function longestSentence(text) {
  let sentences = text.match(/\w[^.!?]*?[.!?]/g);

  let longest = sentences.reduce((longest, currentSentence) => {
    let words = currentSentence.split(' ');

    if (words.length > longest.wordCount) {
      longest.wordCount = words.length;
      longest.sentence = currentSentence;
    }

    return longest;
  }, {sentence: '', wordCount: 0});

  console.log(longest.sentence + '\n');
  console.log(`The Longest sentnece has ${longest.wordCount} words.`);
}

longestSentence(longText);

// console output
/*
It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

The longest sentence has 86 words.


// Assuming the last sentence is removed:

longestSentence(longText);

// console output
Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

The longest sentence has 30 words.

*/