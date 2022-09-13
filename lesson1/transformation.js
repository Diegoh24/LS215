function myMap(array, func) {
  let newArr = [];

  for (let index = 0; index < array.length; index += 1) {
    newArr.push(func(array[index], index, array));
  }

  return newArr;
}

let plusOne = n => n + 1;
let a = myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
console.log(a)

function getBooksTitle(books) {
  // ...
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

