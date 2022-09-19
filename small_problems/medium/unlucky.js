/*
------------ **Explicit Requirements** -------------
Rules:
takes a year as an argument and returns the number of
Friday the 13ths in that year.

assume the year is greater than 1752

Input: integer (year)
returns the # of friday the 13ths
get the number of 13ths, check if it's a friday


Output: an integer (# of f13)
------------ **Implicit Requirements** -------------
deal with date objects, to determine if the 13th is a friday
the 13th only occurs once per month,
select the ones that are also a friday,

------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
------------------ Data Structure ------------------
date:
-------------------- Algorithm ---------------------
create a counter  = 0
ieterate from 0 to 11
 create a new date object(year(integer argument), currentMont(iteration), 13)
 extract the first 3 chars from te date obj converted a date string
 if it's equal to 'Fri' increment count

return counter


return counter
---------------------- Notes -----------------------

*/

function fridayThe13ths(year) {
  let fridays = 0
  for (let month = 0; month <= 11; month += 1) {
    fridays += new Date(year, month, 13).getDay() === 5 ? 1 : 0
  }
  console.log(fridays);
}


fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2