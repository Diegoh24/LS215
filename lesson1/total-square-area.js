let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// array of rectanges, returnt he ttoal area covered by all rectangles

// identify the steps
/*
given an array of sub arrays, each representing the length and width of a rectangle

find the area of each rectangle in the array
sum the area of each rectangle in the array
return the summed value
*/

// identify the steps and inputs
/*
For each array, determine the result of multiplying its elements by each other a[0] * a[1], returns an array of rectangle areas
add all the rectangle area arrays and return the sum
*/
// identify the objects returned at each step
/*
map,

reduce,
*/

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((total, area) => total + area);
}

console.log(totalArea(rectangles));

// follow the same steps, except filer the rectangles array before it is assigned to areas, filter
// filter the arrays whose sides aren't equal
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((total, area) => total + area);
}

rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121