// Direct vs. inherited properties
// The following example differentiates between direct properties and properties inherited through the prototype chain:

const example = {}
example.prop = 'exists'

// `hasOwn` will only return true for direct properties:
const resultA = Object.hasOwn(example, 'prop') // true
const resultB = Object.hasOwn(example, 'toString') // false
const resultC = Object.hasOwn(example, 'hasOwnProperty') // false

// The `in` operator will return true for direct or inherited properties:
const resultD = 'prop' in example // true
const resultE = 'toString' in example // true
const resultF = 'hasOwnProperty' in example // true

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
console.log(resultE)
console.log(resultF)
