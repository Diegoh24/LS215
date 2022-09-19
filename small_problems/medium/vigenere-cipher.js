/*

------------ **Explicit Requirements** -------------
encrypts alphabetic text using polyaplhbetic sub

uses a series of caeser cipher based on the letters of a keyword
Each letter of the keyword is treated as a shift value

the shift values are a= 0, b = 1 ... z = 25
the shift val used for a letter is equal to its idx val in the alphabet

uppercase letters are also equivalent to 0 - 25


Rules:
to apply the cipher,
- done sequentially to each char,
  - each char apply the current shiftValue to a caeser cipher for that particular char
- only encrpt alphabetic chars

the keyword is case insensitive, a A - rotate by 13
E e - 4 -idx in the alphabet 0 - 52



Input:

Output:
------------ **Implicit Requirements** -------------
the character a, shifts 13, rot13

if the character is a it is shifter to the right 13 space (rot 13)
non space chars are preserved, case is also preserved
caeser cipher, the letters wrap around the alphabet depending on the shift value
                     d
given a shift val of 4
vxyz = replace it with the letter idx 0
x -y -z -a ->> b (1)
23
25

23 - 25 = -2 + 4 === 2 - 1


25 - 22  = -3 + 4 === 1 - 1
25 - 22  = 3 - key
22 - 25 =  -3 + key = 1




if the letter's idx + the key (depending on the currentLetter) is
greater the MAX pos (25) then instead, set the new letter (encrypted letter)
to the letter at idx = (currentIdx of letter - MAX) + key

there's only a set amount of shift values,
# of shift values is the number of unique chars,
key
------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
'Pineapples don't...'
keyword = meat

Pine appl esdo ntgo onpi zzas
meat meta meat meat -
 4
  0 - rot 13

ciphered:

Bmnx mtpe qwdh

------------------ Data Structure ------------------
continue to work with strings,
want an arra of chars, so that access the idx,

90, Z 90 25
a  -> z
y -> x
e - 70


y -89 -> if the difference betwene the max and (key + charCode) is negative
- 69 ->> D

handle insensitivity, define a max for upperCase and lowerCase

- set the new char to the char at charCode (currentChar - (
-> d

90
A - 65
-------------------- Algorithm ---------------------
key
an integer that represents the idx of the current letter key
shiftVal


replace the chars that match a regex (alphabetic chars
call a helper func encrypt
return the rnew string

**** helper functions ****
set charKey = shift % key.length

ALPHABET SIZE = 25
rotateBy = charCode of the letter at index charKey from keyString e - 70
rotateBy = charKey < upperMAX reassign tot 5. -> ALPHABET SIZE - (upperMAx - rotateBy)  ->
if its not, then set rotateBy                 -> aSize - (LOwerMax - rotateBy)



get char code of the currenTchar
it reassigns, increments the key by 1





if the letter's idx + the key (depending on the currentLetter) is
greater the MAX pos (25) then instead, set the new letter (encrypted letter)
to the letter at idx = (currentIdx of letter - MAX) + key

there's only a set amount of shift values,
# of shift values is the number of unique chars,


see.. go with the easier route..
*/
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const MAX = 25;


function vigenereCipher(text, key) {
  let shiftVal = 0;

  let encrypt = char => {
    let charKey = key[shiftVal % key.length].toLowerCase();
    let rotateBy = alphabet.indexOf(charKey);
    let charPos = alphabet.indexOf(char.toLowerCase());
    shiftVal += 1;

    let newPos = charPos + rotateBy > MAX ? (charPos - MAX + rotateBy - 1) : charPos + rotateBy;
    let newChar = alphabet[newPos];
    return /[a-z]/.test(char) ? newChar : newChar.toUpperCase();
  }

  return text.replace(/[a-z]/gi, encrypt);
}

let text = "Pineapples don't go on pizzas!"


console.log(vigenereCipher(text, 'meat'));