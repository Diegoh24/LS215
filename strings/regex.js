function isUrl(string) {
  console.log(!!/^https?:\/\/\S*$/.test(string));
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false

function fields(fieldString) {
  console.log(fieldString.split(/[ \t,]+/));
}

fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']

fields("Pete \n 201");
// -> ['Pete', '\n', '201']

function mysteryMath(string) {
  console.log(string.replace(/[-+*\/]/g, '?'));
}
mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

function danish(string) {
  console.log(string.replace(/^apple|blueberry|cherry/, 'danish'));
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'

function formatDate(date) {
  console.log(date.replace(/^(\d{4})-(\d+)-(\d+)/, '$3.$2.$1'));
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)

function formatDate(date) {
  console.log(date.replace(/^(\d{4})([\/\-])(\d+)\2(\d+)/, '$4.$3.$1'));
}


formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2017/05/03'); // -> '03.05.2017'
formatDate('2015/01-31'); // -> '2015/01-31' (no change)