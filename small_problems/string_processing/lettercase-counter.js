function letterCaseCount(string) {
  return string.split('').reduce((stringData, char) => {
    if (/[a-z]/.test(char)) {
      stringData.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      stringData.uppercase += 1;
    } else {
      stringData.neither += 1;
    }

    return stringData;
  }, {lowercase: 0, uppercase: 0, neither: 0});
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }