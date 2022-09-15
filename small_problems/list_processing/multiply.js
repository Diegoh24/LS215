function multiplyAllPairs(array1, array2) {
  let pairs = []

  array1.forEach(number1 => {
    array2.forEach(number2 => pairs.push(number1 * number2));
  });

  return pairs.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]