// Direct vs. inherited properties

// The following example differentiates between direct properties and properties inherited through the prototype chain:

const example = {}
example.prop = 'exists'

// `hasOwnProperty` will only return true for direct properties:
const resultA = example.hasOwnProperty('prop') // true
const resultB = example.hasOwnProperty('toString') // false
const resultC = example.hasOwnProperty('hasOwnProperty') // false

console.log(resultA)
console.log(resultB)
console.log(resultC)

// The `in` operator will return true for direct or inherited properties:
// We can asume that in is for "inherited" not for "inside".
const resultD = 'prop' in example // true
const resultE = 'toString' in example // true
const resultF = 'hasOwnProperty' in example // true

console.log(resultD)
console.log(resultE)
console.log(resultF)
