const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
/*
counts the number of occurences of each element in the arrray,

input: arr of elements
output: name of the vehicle followed by the number of that vehicle in the arr

dat stucture;
obj

iterate over vehicles
add each vehicle to obj
- if automobiles[curentVehicle] does not exist, set it to 1
  else increment

  iterate over the object, outputting each vehicle name and count

  I could also flatMap....
  return an arr
*/

function countOccurrences(automobiles) {
  [...new Set(automobiles)].forEach(vehicle => {
    console.log(`${vehicle} => ${automobiles.filter(v => v === vehicle).length}`);
  });
}

countOccurrences(vehicles);
// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2