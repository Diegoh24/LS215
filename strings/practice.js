let firstName = 'Diego';
let lastName = 'Hernandez';
let fullName = [firstName, lastName].join(' ');

console.log(fullName.split(' '));

let language = 'JavaScript';
let idx = language.indexOf('S');

let charCode = language.charCodeAt(idx);
console.log(idx);

console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';
console.log(a > b);
b = 'B'
console.log(a > b);

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = [fact1, fact2.toLowerCase()].join(' ');
console.log(compoundSentence);
console.log(fact1[0], fact2[0]);

let pi = 22 / 7;
pi = String(pi);
console.log(pi.lastIndexOf('14'));

let boxNumber = (356).toString();
console.log(boxNumber);
boxNumber = parseInt(boxNumber);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);



console.log()

const rlSync = require('readline-sync');

let name = rlSync.question('what is your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}

