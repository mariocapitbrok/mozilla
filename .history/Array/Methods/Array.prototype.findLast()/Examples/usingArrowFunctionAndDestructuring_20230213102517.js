//Using arrow function and destructuring

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'fish', quantity: 1 },
  { name: 'cherries', quantity: 5 },
]

const result = inventory.findLast(({ quantity }) => quantity < 2)

console.log(result)
// { name: "fish", quantity: 1 }
