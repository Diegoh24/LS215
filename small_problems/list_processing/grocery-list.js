function buyFruit(array) {
  return array.flatMap(([fruit, count]) => Array(count).fill(fruit));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]