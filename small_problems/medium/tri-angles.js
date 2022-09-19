/*
------------ **Explicit Requirements** -------------
Rules:
triangle classification
right : one angle is exactly 90 degrees
acture : all 3 angles are less than 90 degrees
obtuse: one angle is greater than 90 degrees

valid:
- sum of the angles is 180 degrees
- every angle must be greater than 0

Input:
3 angles (numbers)
Output:
triangle description
'right'
'acute'

all integers, in degrees
------------ **Implicit Requirements** -------------

------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------

------------------ Data Structure ------------------
arr of angles
-------------------- Algorithm ---------------------
capture angles as an arr
return false if any of the angles is 0 or the sum of angles is not equal to 180

sort the arr
if any angle if the last element is greater than 90
  return obtuse
if any angle is equal to 90, return 'right'

else return 'acute'

---------------------- Notes -----------------------

*/
function triangle(...angles) {
  if (!angles.every(angle => angle > 0)) return 'invalid';
  if (angles.reduce((sum, angle) => sum + angle) != 180) return 'invalid';

  if (angles.some(angle => angle > 90))
    return 'obtuse';
  else if (angles.some(angle => angle === 90))
    return 'right'
  else
    return 'acute';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"