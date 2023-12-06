//The following example provides a function which returns the last element found in a specified array.

// Our array with items
const cart = ['apple', 'banana', 'pear']

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1)
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart)
console.log(item1) // 'pear'

// Add an item to our 'cart' array
cart.push('orange')
const item2 = returnLast(cart)
console.log(item2) // 'orange'
