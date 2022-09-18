/*
keep the silence under 10 - 15 seconds.. interviewer????
talk through the thought process

throuhgh your communication that the interviewer gauges how well you understand the problem
through your communication that the interviewer guages how well you work through the problem
- how well you validate the problem
 - walking the interviewer through your thought process


given a list of objects of different
- types
- material or materials (paper, glass, organic, plastic)

sort the list of objects across the 4 recycling bins according tot heir matieral and matieral 2 if present
 - listing the types of object that the bin contains.

the bins should be listed in the output even if some of them are empty - {}

if an object is made of 2 materials, its type shoul dbe lsiten in both
of the respective bins

The order of the type's in each bin should be the same
as the order of their respective objects was in the input list

// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

input: a list of objects, each with 2 or properties
output: the bins (list) containing the appropriate objects sorted

explicit:
4 recyclying bins - sorted by material and seocond matieral (if applicable)

paper - cont
glass
organic - ]
plastic

-each bin will contain all the objects that match on of the materials in the bin:
= of an object has two matierals, it will appeaer twice in the output, in 2 separate bins - same object

output : the array sorted according to the type

implicit:
- the order of the types in each bin is the same order of their respective objects as in the input list

- if the first object is object of type x, type x will apear first in whichever list it's in
- the positions preserved.


data structure, an array of objects,
continue working with the array, since I need to preserve their positions, I can use the index,
-
return an array,


output = [
  ["wine bottle", "amazon box", "beer bottle"], - paper
  ["wine bottle", "beer bottle"], - glass
  ["rotten apples", "out of date yogurt"], - orgnaic
  ["out of date yogurt"] - plastic
]

algorithm:
high level:
create a new array containing subarrays that each represent a recycle bin containing all the object's
of the appropriate materials from the given objects.



iterate over the constant, that contains the materials,

transform eaech element (string that names the material)
into an array with all the objects from the input array whose
material or secondMaterial property matches the name of the material,
the current element being iterated over


iterate over the array of materials, passing in each material to the block
  -within the callback function's block,
    //create a new array
    iterate over the input array, at each element, select the elements whose
    material or second matieral match the name of the current element of the outer function

    an array of the appropriate objects, the order is preserved
    transform this array into an array containing only the type property of each object

*/

let objects = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

function sortRecycleBins(objects) {
  const MATERIALS = ['paper', 'glass', 'organic', 'plastic'];

  return MATERIALS.map(bin => {
    let binObjects = objects.filter(obj => {
      return obj.material === bin || obj.secondMaterial === bin;
    });

    return binObjects.map(obj => obj.type);
  });
}

console.log(sortRecycleBins(objects))