// Find all the ocurrences of an element
const array = ['a', 'b', 'a', 'c', 'a', 'd']
const element = 'a'

// Code from here...
const indices = []
let idx = array.lastIndexOf(element)

while (idx !== -1) {
  indices.push(idx)
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1
}

console.log(indices)
// [4, 2, 0]
