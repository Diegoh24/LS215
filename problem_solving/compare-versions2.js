/*
Definitions and rules,
examine the examples to infer the specific rules for comparing version numbers

- if any of th einputs contain invalid characters return null
  - any characters other than digits and . are considered invalid
  - a version number that begins or ends with a period or has more than one
    period in a row is invalid
- compare the two input versions
  - if version1 > version2, return 1
  - if version1 < version2 ,return -1
  - if version1 === version2, return 0

Since this problem didn't provide many explicit rules,
you MUST break it down further to determine exactly how to compare the two valid
version numbers. The problem didn't give you explicit rules that you can use right
away, but it does provide several examples that you can use to deduce the explicit
rules to use for a solution

- the rules to compare two version numbers
- start from the left most parts of the two version numbers
- if the number part of the first version number is larger, the first version number is larger
- if the number part of the second verison number is larger, then the first version numbe is smaller
- if the number parts of both version numbers are the same, then move to the next part of the version number
  - do the same comparison and decide which version number is larger
  - keep moving to the right until the result of the operation of the comparison is determined
  - if you get to the last number part of the two version number and they're equal,
  then the 2 version numbers are equal.

*/