/*
--------------------- Problem ----------------------
fib series is a seq of numbers
each num is the sum of the 2 previous nums
the first two fib nums are 1 and 1

f(n) = F(n - 1) + F(n - 1) + f(n - 2) where n > 2

------------ **Explicit Requirements** -------------
-  Rules:
takes an integer arg,
computes the fib number at position (arg)

- Inputs:
integer argument,
the first 2 nums in fib are 1, the pos at idx 3 is 2

- Output:
the fib number at position idx of the given argument

------------ **Implicit Requirements** -------------
the result of f(20) is
f(20 - 1) + f(20 - 2)


------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
given 20
call the same function
------------------ Data Structure ------------------
numbers themselves, recursive that eeventually returns 1,

-------------------- Algorithm ---------------------
recursively call the functino
break if arg is less than 2, return 1

return f(n - 2) + f(n - 1)
              **** helper functions ****

---------------------- Notes -----------------------

// */
// function fibonacci(nth) {
//   if (nth <= 2) return 1;
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }



// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


// /*
// procedural fib

// store all the fibs in an arr, contain 1, 1
// while fibs.length < the nth argm
//   push a new element to the fib arr.

// return the element at index nth.

// /*/

// function fibonacci(nth) {
// let fibs = [1, 1];
// while (fibs.length < nth) {
//   let lastIdx = fibs.length - 1;
//   fibs.push((fibs[lastIdx] + fibs[lastIdx - 1]));
// }
// console.log(fibs[nth - 1]);
// }


// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050

// memoization
// saving computed result for later use
//
const fibs = [0, 1, 1];


/*
save the recursive calls, avoid having to make 2 recursive calls
save the result of each recursive call
reuse that same result
- use an array,
at each recursive call, rec calls again with nth - 1
until nth < 2, returns 1.

fib(n -1)
return 1, add

/*/
function fibonacci(nth) {
  if (fibs[nth]) return fibs[nth];
  fibs[fibs.length] = fibs[fibs.length - 1] + fibs[fibs.length - 2];

  return fibonacci(nth)
}


// let fibNums = [0, 1, 1];

// function fibonacci(nth) {
//   if (fibNums[nth]) return fibNums[nth];
//   fibNums[fibNums.length] = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
//   return fibonacci(nth);
// }

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(74));      // 6765
