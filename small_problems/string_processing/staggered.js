function staggeredCase(string) {
  console.log(string.split('').map((char, index) => {
    return index % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
  }).join(''));
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(string) {
  console.log(string.split('').map((char, index) => {
    return index % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
  }).join(''));
}

function staggeredCase(string) {
  let staggered = ''
  let lastChar = 0

  for (let index = 0; index < string.length; index += 1) {
    if (/[a-z]/i.test(string[index])) {
      if (lastChar % 2 === 0) {
        staggered += string[index].toUpperCase();
        lastChar = 1
      } else {
        staggered += string[index].toLowerCase();
        lastChar = 0;
      }
    } else {
      staggered += string[index];
    }
  }

  console.log(staggered);
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"