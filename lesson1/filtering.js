function myFilter(array, func) {
  let filteredArr = []

  for (let index = 0; index < array.length; index += 1) {
    let element = array[index]
    if (func(element, index, array)) filteredArr.push(element);
  }

  return filteredArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let a = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

console.log(a);
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]