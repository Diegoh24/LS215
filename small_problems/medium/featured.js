/*
------------ **Explicit Requirements** -------------
featured num is an odd  number that is a multiple of 7
all digits occuring exactly once each


Rules:
featured
 - odd num
 - multiple of 7 (% 7 === 0)
 - and has repeating digits
largest possible num

Input:
an integer
Output:
returns the next featured number greater than the integer
if none, return a msg

------------ **Implicit Requirements** -------------


------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
12,

------------------ Data Structure ------------------
continue working with numbers, can use strings and arrays of digits for validating repeating chars


-------------------- Algorithm ---------------------

loop while number is less than MAX
  increment + 1;
  if number is divisible by 7, is odd, and !repeatChars - returns false
    return the number
end

return false,


**** helper functions ****
repeatChars -returns a boolean
take the digits, turn to a string, turn the str into an arr of digits,
check to se eif all of the digits are unique ((every(dig idx => idx ==== last index of dig
---------------------- Notes -----------------------

*/
function featured(number) {

  const MAX = 9876543201;

  while (number < MAX) {
    number += 1;
    if (number % 7 === 0 && number % 2 !== 0 && !repeatChars(number)) {
      console.log(number);
      return;
    }
  }

  console.log("There is no possible number that fulfills those reqs");
}


let repeatChars = digits => {
  return [...String(digits)].some((dig, idx, digs) => {
    return idx !== digs.lastIndexOf(dig);
  });
};

console.log(featured(-7)); // 7
console.log(featured(-14)); // -7
console.log(featured(-9876543500)); // -9876543201


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."