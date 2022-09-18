// /*
// input: takes an array, and a search item (integer, string)
// returns the index of the search item if found, -1 otherwise
// Can assume that the array argument will be sorted.

// explicit:
// - cuts the search area in half on each iteration
// - discards the half that you know your search doesn't exists in.
// - relies on the data being sorted

// test: [], 'pizzeria'

// - retrieve the middle from the (asume truncation to integer).
// - if the middle value is equal to the search term, stop the search
//   - return the index of the middle value.

// - if the middle values is less than the search term
//   - discard the lower half, INCLUDING the middle value
//   - repeat the process from the top, use the upper halfa s the starting data
// middle val is < search term, then the search lies in the upper half, discard theat lower half, upper half,


// - if the middle value is greater than the search term then instead,
//   - discard the upper half, INCLUDING the middle value
//   - use the upper lower half as the starting data

// if the starting data is ever empty, then return -1


// lends itself to recursion:
// - conditions: until the middle value is equal to the search term OR until the data being searched is empty, has no elements

// given a data structure (array)
// set half = to the length of the array divided by 2 floor

// compare the search term to the element at index 'half'
// if the search term is equal to half, return half
// else
//   value at half index < searchterm  ? if it ise, assign currentData to a subarray of the array starting at the index half + 1
//   if the value at half index > searchTerm, assign currentData to a subarray of the array starting at index 0 and excluding half

// determine which half the search term by accessing the element at the middle index, what if

// call binarySearch passing in the currentData as an element

// */

// function binarySearch(data, searchTerm) {
//   let currentData = data.slice();

//   while (currentData.some(data => data)) {
//     let half = Math.floor(currentData.length / 2);
//     let middle = currentData[half];

//     console.log(currentData, middle);
//     if (middle === searchTerm) {
//       return data.indexOf(searchTerm);
//     } else {
//       currentData = (middle < searchTerm ? currentData.slice(half) : currentData.slice(0, half));
//     }
//   }
//   return -1;
// }

// const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// binarySearch(yellowPages, 'Apple Store');                // 0

// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

// reduce an invoice object
function getTotalFromInvoice(invoice) {
  let total = Object.values(invoice).reduce((total, value) => total + value);

  return {total,};
}

console.log(getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 })); // { total: 21000 }