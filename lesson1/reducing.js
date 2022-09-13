function myReduce(array, func, initial) {
  let accumulator = initial || array[0]
  let startIndex = initial ? 0 : 1

  for (let index = startIndex; index < array.length; index += 1) {
    accumulator = func(accumulator, array[index], index, array);
  }

  return accumulator
}

// takes func, optional second argument the initalValue.
// initalValue if passed, is used as the first argument in the first call to the callback funciton.
// if initialValue does not exists, reduce uses the first element of the array, start processing with the seocnd
let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

let a = myReduce([5, 12, 15, 1, 6], smallest);           // 1
let b = myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

console.log(a, b);

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

let c = longestWord(['abc', 'launch', 'targets', '']);      // "targets"
console.log(c);