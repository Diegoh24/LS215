// There is a queue for the self-checkout tills at the supermarket. Your task is
// write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer
// represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

/*
queue for self-checkout tills
- write a funciton that calculates the total time required for all customers to check out.
input: an array of integers -reresents the queue
 -each element is a customer, and its value is the amount of time they require to check out
 - second argument is the number of checkout tills/

 the output is an integer indicating the total time required
 - assume the input will always be valid:
 = the order of the queue is constant never changes
 the front element/person proceeds toa till as soon as it becomes available

-implicit:
want to keep a track of the current minute
multiple tills can be used at the same timet
the elements are removed, used sequentially.

queueTime([10,2,3,3], 2)

x | y
0 |0

-there are no elements:


data strucutre:
- array

algorithm:
given an array, can have two tills an array.

{};
iterate n times n the 2nd argument
at each iteration create a new key, assign each to 0.


loop do - condition - if the queue is !empty and all the tills values are !0


counter that represents the number of minutes,

- iterate over the sub arrays (tills) of the object
  check if any tills contain any values greater than 0
    - if they, remove an element from the array,
  increment the time
  if the value of any property in the object is more than 0, decrement it by 1.


return the count that represents th time
*/


function queueTime(queue, tillCount) {
  let tills = [];
  for (let till = 1; till <= tillCount; till += 1) {
    tills.push([]);
  }

  let time = 0;
  while ( isNotEmpty(queue) || tills.some(isNotEmpty) ) {
    tills.forEach(till => {
      isNotEmpty(till) ? till[0] -= 1 : till[0] = (queue.shift() - 1);
    });

    time += 1;
  }

  return time;
}

let isNotEmpty = array => array.some(element => element);

queueTime([1, 2], 1);
queueTime([5,3,4], 1)

// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2) // 12
