// User-defined vs. built-in objects
// Most built-in properties are non-enumerable by default, while user-created object properties are often enumerable, unless explicitly designated otherwise.

const a = ['is enumerable']

const resultA = a.propertyIsEnumerable(0) // true
const resultB = a.propertyIsEnumerable('length') // false

const resultC = Math.propertyIsEnumerable('random') // false
const resultD = globalThis.propertyIsEnumerable('Math') // false

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
