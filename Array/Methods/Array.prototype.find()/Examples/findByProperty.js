//Find an object in an array by one of its properties

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
]

function isCherries(fruit) {
  return fruit.name === 'cherries'
}

console.log(inventory.find(isCherries))
// { name: 'cherries', quantity: 5 }
