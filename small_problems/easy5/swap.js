/*

input: a string
- first name
- space delimiter
- last name

return a new str
consisting of
lastName + , + ' '

implicit-
joining the characters with ', '

algo:
split the character by the whitspace, reverse the array, join the arra with new delimiter

*/

function swapName(name) {
  console.log(name.split(' ').reverse().join(', '));
  console.log(name.replace(/(.+)\s(\S+)/, '$2, $1'));
}

swapName('Joe Roberts omg');    // "Roberts, Joe"