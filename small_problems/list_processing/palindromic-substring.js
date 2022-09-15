function substrings(string) {
  return string.split('').reduce((substrings, char, index, chars) => {
    chars.slice(index).forEach((char, index2) => {
      substrings.push(string.slice(index, index2 + index + 1));
    });

    return substrings;
  }, []);
}

function isPalindrome(string) {
  return string.length > 1 && string.split('').reverse().join('') === string
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]