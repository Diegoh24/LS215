/*
input: non empty string
output returns the middle character or characters

explicit:
if string length is odd, return the middle char
if str length even return the middle 2 chars

data structure - str

algo:
use the middle index to eithe return the character at the same index,
or return the char at the same index  + 1

if the str length is odd, the middle char will be length / 2 floored
return a substring starting at the middle char, up to and excluding middleCHarIdx + 1

if the str length is even, the middle char will be length / 2 floored
return a substring starting at the middle char, up to and including middleCharIdx + 2

// your error stemmed for not checking the test case well enough here, lost time.
// should have noticed, if the str length is even, e.g 6, half of that is 3, index 3 is beginning of the 2nd half though,
so you'd have to decrement it.

*/
function centerOf(string) {
  let middle = Math.floor(string.length / 2);
  middle = string.length % 2 === 0 ? middle - 1 : middle;
  let end = string.length % 2 === 0 ? middle + 2 : middle + 1;

  console.log(string.slice(middle, end));
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"