// Using Object.isFrozen

// A new object is extensible, so it is not frozen.
const result1 = Object.isFrozen({}) // false
console.log(result1)

// An empty object which is not extensible
// is vacuously frozen.
const vacuouslyFrozen = Object.preventExtensions({})
const result2 = Object.isFrozen(vacuouslyFrozen) // true
console.log(result2)

// A new object with one property is also extensible,
// ergo not frozen.
const oneProp = { p: 42 }
const result3 = Object.isFrozen(oneProp) // false
console.log(result3)

// Preventing extensions to the object still doesn't
// make it frozen, because the property is still
// configurable (and writable).
Object.preventExtensions(oneProp)
const result4 = Object.isFrozen(oneProp) // false
console.log(result4)

// Deleting that property makes the object vacuously frozen.
delete oneProp.p
const result5 = Object.isFrozen(oneProp) // true
console.log(result5)

// A non-extensible object with a non-writable
// but still configurable property is not frozen.
const nonWritable = { e: 'plep' }
Object.preventExtensions(nonWritable)
Object.defineProperty(nonWritable, 'e', {
  writable: false,
}) // make non-writable
const result6 = Object.isFrozen(nonWritable) // false
console.log(result6)

// Changing that property to non-configurable
// then makes the object frozen.
Object.defineProperty(nonWritable, 'e', {
  configurable: false,
}) // make non-configurable
const result7 = Object.isFrozen(nonWritable) // true
console.log(result7)

// A non-extensible object with a non-configurable
// but still writable property also isn't frozen.
const nonConfigurable = { release: 'the kraken!' }
Object.preventExtensions(nonConfigurable)
Object.defineProperty(nonConfigurable, 'release', {
  configurable: false,
})
const result8 = Object.isFrozen(nonConfigurable) // false
console.log(result8)

// Changing that property to non-writable
// then makes the object frozen.
Object.defineProperty(nonConfigurable, 'release', {
  writable: false,
})
const result9 = Object.isFrozen(nonConfigurable) // true
console.log(result9)

// A non-extensible object with a configurable
// accessor property isn't frozen.
const accessor = {
  get food() {
    return 'yum'
  },
}
Object.preventExtensions(accessor)
const result10 = Object.isFrozen(accessor) // false
console.log(result10)

// When we make that property non-configurable it becomes frozen.
Object.defineProperty(accessor, 'food', {
  configurable: false,
})
const result11 = Object.isFrozen(accessor) // true
console.log(result11)

// But the easiest way for an object to be frozen
// is if Object.freeze has been called on it.
const frozen = { 1: 81 }
const result12 = Object.isFrozen(frozen) // false
console.log(result12)
Object.freeze(frozen)
const result13 = Object.isFrozen(frozen) // true
console.log(result13)

// By definition, a frozen object is non-extensible.
const result14 = Object.isExtensible(frozen) // false
console.log(result14)

// Also by definition, a frozen object is sealed.
const result15 = Object.isSealed(frozen) // true
console.log(result15)
