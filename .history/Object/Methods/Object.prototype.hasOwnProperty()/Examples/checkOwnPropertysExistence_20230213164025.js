// The following code shows how to determine whether the example object contains a property named prop.

const example = {}
const resultA = example.hasOwnProperty('prop') // false

example.prop = 'exists'
const resultB = example.hasOwnProperty('prop') // true - 'prop' has been defined

example.prop = null
const resultC = example.hasOwnProperty('prop') // true - own property exists with value of null

example.prop = undefined
const resultD = example.hasOwnProperty('prop') // true - own property exists with value of undefined
