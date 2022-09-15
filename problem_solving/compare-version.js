/*
input: any two version numbers in a legal version # format
output: shows whether the first version number is less than greater than equal to or
greater than the second version

PEDAC

understanding the problem:

the arguments are strings, since 1.4.x is not a valid number literal
given a string representing a version number, compare it to another string.
explicit:
-return 1 if arg1 > arg2
-return -1 if version1 < version2
return 0 if both are the same string (

test cases:
-1.2 and 1.1,
returns 1

-1 and 1.0.0 also equal.

implicitly, if all the digits following the decimals are 0, then it's equivalent to
not having any digits. basically
2.1.0 = 2.1
1 = 1.0.0

comparisons are done sequentially,
and based on the number delimited between or before( for first) the decimal

data structure:
-given working with strings, use the string,
convert to an array,

algorithm
high level:
1. get an array of all the integer values delimited by a . [1, 2)] [1, ]
2. filter the array to remove an element that is 0, unless any element after it is greater than 0
3. compare the arrays
  the larger array is the greater version number, [
    - arg1 has more elements than arg2 , return 1
  -if the arrays are the same length,
    -compare the elements at each index,
    -the array with a larger element at the given index is the greater verison number
  -if the arrays are the same length and each number is equal at every index, return 0

*/
function relevantVersionNumbers(version) {
  return version.filter((number, index) => {
    return version.slice(index).some(num => num > 0);
  });
}

function compareVersions(version1, version2) {
  if (!/^\d+([.]\d+)*$/.test(version1) || !/^\d+([.]\d+)*$/.test(version2)) return null;

  [version1, version2] = [version1.split('.'), version2.split('.')]
  version1 = relevantVersionNumbers(version1).map(Number);
  version2 = relevantVersionNumbers(version2).map(Number);

  for (let index = 0; index < version1.length; index += 1) {
    let currentVersion2Digit = version2[index] || 0;

    if (version1[index] > currentVersion2Digit) {
      return 1;
    } else if (version1[index] < currentVersion2Digit) {
      return -1;
    }
  }

  return version1.length >= version2.length ? 0 : -1;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1