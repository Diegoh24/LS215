/*
takes a string returns a object containing 3 properties
percentage of letters that are lowercase
percentage of letters that are uppercase
percentage of letter that are neither
------------ **Explicit Requirements** -------------
-  Rules:

- Inputs:
a string of characters

- Output:
an object containing statistics of the string
  - total # of lowercase chars / total # of chars
  - total # of uppercase chars / total # of chars * 100
  - total # of non alphabetic chars / total # of chars
------------ **Implicit Requirements** -------------
- spaces are counted as chars


------------- **Clarifying Questions** -------------
- invalid input?
 empty stringss, non string types or objects
------------ Examples/Test Cases/Edge's ------------
AbCd +Ef
ACE bdf ' '+
------------------ Data Structure ------------------
arra of chars

-------------------- Algorithm ---------------------
make 3 different arrs from the char, each containing the letters belonging their group (
using a regex and a match,
create 3 diff arrs,
lowercase
uppercase
neither

return an object containing the 3, percent(arr.length, totalNUm)

FORGOT TO WALK THRU ALGO
              **** helper functions ****
get percentage(# of chars, total #)
glength / total multiply by 100. fix it to decimal points

---------------------- Notes -----------------------

*/
function letterPercentages(string) {
  let total = string.length;
  let lowercase = string.match(/[a-z]/g) || [];
  let uppercase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: percent(lowercase.length, total),
    uppercase: percent(uppercase.length, total),
    neither: percent(neither.length, total),
  }
}

let percent = (count, total) => (count / total * 100).toFixed(2);

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentages(',!;');