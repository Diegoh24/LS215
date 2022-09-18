/*
bank of switche range 1..n
every switch is connected to exactly one light that is initially off
You walk down the row of switches and toggle every one of them

you walk back to the beginning of the row and start another pas
on the 2nd pass, toggle the even switches

ON the thirds pass, you go back to the beginning again,
toggle switches that are multiples of 3

input: one argument: the total switches,
returns an array of lights that are on after n switches

implicit:

1..5
the number of times I walk and toggle the switches is equal to the number of switches
round 1: all are on
round 2: 2 and 4 are off, rest are on
round3: 2 and 3 and 4 are off, rest are on
round4: 2 and 3 are off, rest are on
round5: 2, 3, 5 are off, trest are on (1, 4)

if the argument passed is not an integer, return an empty array..

data structure: array, loop, extract the relevant switches at each iteration, each iteration represents the current `round`

object, where each key is an integer, or a stringer integer
array, indexed, index + 1
1 - number,


algo:
high-level
an array containing all the switches,
 - array, fill

loop round starting at 1, round <= # of switches, increment the switch
- iterate through the array of switches, with index.
  - switch number is index + 1
  - if the switchNumber % round === 0
      toggle its state

filter the array of switches to those that are on.
*/




function lightsOn(switchCount) {
  let switches = Array(switchCount).fill(false)
  for (let round = 1; round <= switchCount; round += 1) {
    switches.forEach((state, index) => {
      if ((index + 1) % round === 0) switches[index] = !switches[index];
    });
  }
  return switches.flatMap((on, switchNum) => on ? [switchNum + 1] : []);
}


console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]