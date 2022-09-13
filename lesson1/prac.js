function buildOrder(hungerLevel, item) {
  return 'I am' + hungerLevel + ' hungry and would like a ' + item + '.';
}


function prasaOrder() {
  console.log(buildOrder('very', 'salad'));
}

function sueOrder() {
  console.log(buildOrder('sort of', 'sandwic'));
}

function jaiOrder() {
  console.log(buildOrder('not', 'smoothie'));
}


let count = [1, 2, 3, 4, 5];

// function iterate(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     console.log(array[index]);
//   }
// }

function iterate(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

let logger = num => console.log(num);

iterate(count, logger);


function oddOrEven(array) {
  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}

