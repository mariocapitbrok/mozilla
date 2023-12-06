// Find all the ocurrences of an element
const array = ['a', 'b', 'a', 'c', 'a', 'd']
const element = 'a'

// Code from here...
const indices = []
let idx = array.indexOf(element)

while (idx !== -1) {
  indices.push(idx)
  idx = array.indexOf(element, idx + 1)
}

console.log(indices)
// [0, 2, 4]
