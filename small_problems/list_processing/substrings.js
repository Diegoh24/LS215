function substrings(string) {
  return string.split('').reduce((substrings, char, index, string1) => {
    string1.slice(index).forEach((char, index2) => {
      substrings.push(string.slice(index, index2 + index + 1))
    });
    return substrings
  }, []);
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]