// function swapCase(string) {
//   let swapped = string.split('').map(char => {
//     if (/[a-z]/.test(char)) return char.toUpperCase();
//     if (/[A-Z]/.test(char)) return char.toLowerCase();
//     return char;
//   });

//   console.log(swapped.join(''));
// }

// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"


function foo(list) {
  return list.map(function (word) {
      return word.match(/[aeiou]/i) || [];
    }).reduce(function (acc, letterList) {
      return acc + letterList.length;
    }, 0);
}

console.log(foo(['apple', 'banana', 'orange']));