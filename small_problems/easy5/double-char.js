/*
input: a string
output: the string, with every character doubled.
- returns the result as a new str

data struc - arr

algo:
reduce an arr of chars down to the a string with every character doubled.


*/
function repeater(string) {
  console.log(string.split('').reduce((doubled, char) => doubled += (char + char), ''));
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// function only doubles non vowels
//reduce arr of chars down to a string, at every char
// check if the char is consonant
// (?i)([b-z&&[^eiou]])\1\1+

function doubleConsonants(string) {
  console.log(string.replace(/(?![aeiou])[a-z]/ig, `$&`.repeat(2)));
  console.log(string.split('').reduce((doubled, char) => {
    return doubled + (/[a-z]/i.test(char) && /[^aeiou]/.test(char) ? char + char : char);
  }, ''));

}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""