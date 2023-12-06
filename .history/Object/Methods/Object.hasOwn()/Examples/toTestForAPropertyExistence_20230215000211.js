// Using hasOwn to test for a property's existence
// The following code shows how to determine whether the example object contains a property named prop.

const example = {}
const resultA = Object.hasOwn(example, 'prop') // false - 'prop' has not been defined

example.prop = 'exists'
const resultB = Object.hasOwn(example, 'prop') // true - 'prop' has been defined

example.prop = null
const resultC = Object.hasOwn(example, 'prop') // true - own property exists with value of null

example.prop = undefined
const resultD = Object.hasOwn(example, 'prop') // true - own property exists with value of undefined

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
