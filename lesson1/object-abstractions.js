let myObject = { a: 1, b: 2, c: 3}

Object.keys(myObject).forEach(key => {
  console.log('key: ' + key + ', value' + String(myObject[key]));
});

console.log(Object.values(myObject));


function keepEvenValues(object) {
  let objEntries = Object.entries(object);
  let objFiltered = objEntries.filter(([key, val]) => val % 2 === 0);

  return Object.fromEntries(objFiltered);
}

console.log(keepEvenValues({ a: 1, b: 2, c: 3 })); // { b: 2 }

function getTotalFromInvoice(invoice) {
  let total = Object.values(invoice).reduce((total, value) => total + value);

  return {total: total}
}

console.log(getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 }));