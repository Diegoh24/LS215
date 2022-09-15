function sum(integer) {
  return integer.toString().
                split('').
                reduce((sum, numberString) => {
    return sum + Number(numberString);
  }, 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45