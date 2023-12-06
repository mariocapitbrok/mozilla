// Using Object.isExtensible

// New objects are extensible.
const empty = {}
const result1 = Object.isExtensible(empty) // true

// They can be made un-extensible
Object.preventExtensions(empty)
const result2 = Object.isExtensible(empty) // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({})
const result3 = Object.isExtensible(sealed) // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({})
const result4 = Object.isExtensible(frozen) // false

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
