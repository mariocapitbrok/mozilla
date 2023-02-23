//Find last object in an array matching on element properties
//This example shows how you might create a test based on the properties of array elements.

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'fish', quantity: 1 },
  { name: 'cherries', quantity: 5 },
]

// return true inventory stock is low
function isNotEnough(item) {
  return item.quantity < 2
}

console.log(inventory.findLast(isNotEnough))
// { name: "fish", quantity: 1 }
