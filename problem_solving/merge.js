/*
input: 2 + objects
output: combines the objects

explicit:
the objects combined together so the values of
matching keys are added together.

{ a: 10, b: 20. c: 30}
{ a: 3, c: 6, d: 3}
- return {a:13, b: 20, c: 36, d:3}
-return a new array, not destructive

no built-in methods;

implicit:
if the objects have no matching keys, they can just be added,
if the objects have matching keys, they are added..


quesiton:
- what if the input is not valid not an object
- what if the object contains non integer values,
- what if the two objects have matching keys but the values are not the same data type: how to handle??

data strcutre: an object..
- want to continue to work with aobject return an object

algorithm:
given two different objects.
- obtain the keys tht exists in both objects, and use that as an array to iterate over..
  - at each iteration, if both obj1[currentKey] and object2[currentKey] both reference values, then
  concatenate and add the result to the obj to be returned

otherwise -
add the value from object1[key] || object2[currentKey];

return the new merged object.


cannot use keys method...
*/
function combine(object1, object2) {
  let merged = {}
  let keys = Object.keys(object1)
  Object.keys(object2).forEach(key => keys.includes(key) ? '' : keys.push(key));

  keys.forEach(key => {
    if (object1[key] && object2[key]) {
      merged[key] = object1[key] + object2[key];
    } else {
      merged[key] = object1[key] || object2[key];
    }
  });

  return merged
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB)) // Returns { a: 13, b: 20, c: 36, d: 3 }

function isMerge(string, part1, part2) {
  part1 = part1.split('');
  part2 = part2.split('');
  string = string.split('');
  let both = []

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index]

    if (part1.includes(char) || part2.includes(char)) {
            console.log(char);
      if (part1[0] !== char && part2[0] !== char && !both.includes(char)) return false;
      if (part1[0] === char && part2[0] === char) {
        string = string.filter(strChar => strChar !== char);
        both.push(char);
      }
      part1[0] === char ? part1.shift() : part2.shift();
    } else {
      return false
    }
  }

  return true;
}

let str = "(q*Afj1(q2y0i/)?s"
let part1 = "(q2y0i"
let part2 = "(q*Afj1/)?s"

console.log(isMerge(str, part1, part2));

// console.log(isMerge('xcyc', 'xc', 'cy'));
// console.log(isMerge('xcyc', 'yc', 'xc'));

// console.log(isMerge('codewars', 'code', 'wars'));
// console.log(isMerge('Making progress', 'Mak pross', 'inggre'));
// console.log(isMerge('xcyc', 'xc', 'yc'));
// console.log(isMerge('codewars', 'code', 'code'));
// console.log(isMerge('More progress', 'More ess', 'pro'));