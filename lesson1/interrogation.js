function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i], i, array)) return false;
  }

  return true
}

let isAString = value => typeof value === 'string';
let a = myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
console.log(a);