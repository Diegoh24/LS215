const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemId, transactions) {
  return transactions.filter(item => item.id === itemId)
}

console.log(transactionsFor(101, transactions));

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function isItemAvailable(itemId, transactions) {
  let itemTransactions = transactionsFor(itemId, transactions);
  let itemQuantity = itemTransactions.reduce((items, transaction) => {
    let quantity = transaction.quantity;
    return items + (transaction.movement === 'in' ? quantity : -quantity);
  }, 0);

  return (itemQuantity > 0);
}

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true


