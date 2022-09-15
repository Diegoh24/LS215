function isBalanced(string) {
    let parenthesis = string.split('').filter(char => '()'.includes(char));

    let counts = parenthesis.reduce((count, parenthesisChar) => {
      count[parenthesisChar] ? count[parenthesisChar] += 1 : count[parenthesisChar] = 1;
      if (count[')'] > (count['('] || 0)) count[')'] += 2;
      return count;
    }, {});

    return (counts['('] === counts[')']);
}

// function isBalanced(string) {
//   let parensCount = 0;
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === '(') {
//       parensCount += 1;
//     } else if (string[i] === ')') {
//       parensCount -= 1;
//     }

//     if (parensCount < 0) {
//       return false;
//     }
//   }

//   return parensCount === 0;
// }



console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false