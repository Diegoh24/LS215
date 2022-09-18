/*
caeser cipher - encrypts text
each letter in the text is substituted by a the letter a given number of positions away in the alphabet
if the letter 'a' is shifter by 3 positions, it will be substituted with the letter d.

this shift value is referred to as the key

the encrypted plaintext (ciphertext) can be decoded using this key value

the caeser cipher only encrypts letters (including both lower and upper case) Any other character is left as is.
only encrypts letters (including both lower and upper case)
the letters are the same letter case as the original leter
if the key value for shifting exceeds the length of the alphabet,
it wraps around from the beginning

explicit:
- can contain non-alphabetic characters
- non alphabetic chars should be ignored, but position maintained.
- the key, is the number of positions the that a letter shifted in the alphabet. The new position corresponds to the position
of the new character, or the character that will substitute the current character.

the key value cna be greater than the length of alphabet.

how do I handle wrapping around the alphabet., z - 1 => a
how I determine whether a letter should be shifted...
 -- if at any point, the key + the position of the current letter exceeds the max position
then it gets wrapped

key > alphabet

z ->
26 -z >
z 52
what if the key is greater than 13 but < 26
25
z ->
y ->

determine the chars that can be wrapped around depend on where they lie'
position of the character is greater than the max position - key
26 - 2
+ key
char position - (maxPosition - key)

z ->
26 - 1
25 ->
y

test case 'a'
a b c d
1 - - 4
- need a way to rerepesent the letters an their positions
-
input: string, key that is an integer
return a new stirng, which each character encrypted

test cases: 'ABCS
algo: replace strings, position,

uppercase range : 65 - 90
lowercase range: 91 - 122
max positions 65 for uppercase, 122 for lowercase

determine the chars that can be wrapped around depend on where they lie'
position of the character is greater than the max position - key
26 - 2
+ key
char position - (maxPosition - key)

z ->

algo:
high-level:
create an encrypted variable empty str
get the modulo of the key
key % 26,
47 % 25

iterate over each char in the string, (for loop) using the index
  get the charCode from the current letter

check to see if the character is in the alphabet
  check to see if geting a character from the (charCode + key) returns a character within the alphabet,
    set the charCode to charCode + key, else set the CharCode to charCode - key
  if the char is uppercase
    -if the the letter charCode > than maxUPPER - key
      set the charCode to the charCode - key
    -else
      set the charCode to the charCode + key

  else if the char is lowercase
    if the letter charCode > maxLower - key
      set the charCode to the charCode - key
    else
      set charCode to the charCode + key



  replace alphabetical letters with their shifted counterpart by altering the char code

  add each letter using the charCode
  return the encrypted string
example ('a' ,47 -> 21, +

*/

function caesarEncrypt(text, key) {
  let MAX = 26
  key = key % MAX;
  console.log(text.replace(/[a-z]/gi, char => encrypt(char)));

  function encrypt(char) {
    let charCode = char.charCodeAt();
    let charCase = char.toLowerCase() === char ? /[a-z]/ : /[A-Z]/;
    charCode += charCase.test(String.fromCharCode(charCode + key)) ? key : (key - MAX);
    return String.fromCharCode(charCode);
  }
}

function caesarEncrypt(text, key) {
  key = key % 26;
  let encrypted = ''

  for (let index = 0; index < text.length; index += 1) {
    let charCode = text[index].charCodeAt();

    if (/[a-z]/.test(text[index])) {
      charCode += /[a-z]/.test(String.fromCharCode(charCode + key)) ? key : (key - 26);
    } else if (/[A-Z]/.test(text[index])) {
      charCode += /[A-Z]/.test(String.fromCharCode(charCode + key)) ? key : (key - 26);
    }
    encrypted += String.fromCharCode(charCode);
  }

  console.log(encrypted);
}

// function charCodes() {
//   let code = 65
//   while (code <= 122) {
//     console.log(String.fromCharCode(code), code);
//     code += 1;
//   }
// }
// charCodes();

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"