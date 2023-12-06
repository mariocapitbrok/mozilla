// Object.preventExtensions returns the object
// being made non-extensible.
const obj = {}
const obj2 = Object.preventExtensions(obj)
obj === obj2 // true

// Objects are extensible by default.
const empty = {}
Object.isExtensible(empty) // true

// They can be made un-extensible
Object.preventExtensions(empty)
Object.isExtensible(empty) // false

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
const nonExtensible = { removable: true }
Object.preventExtensions(nonExtensible)
Object.defineProperty(nonExtensible, 'new', {
  value: 8675309,
}) // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
  'use strict'
  // throws a TypeError
  nonExtensible.newProperty = 'FAIL'
}
fail()

// A non-extensible object's prototype is immutable:

const fixed = Object.preventExtensions({})
// throws a 'TypeError'.
fixed.__proto__ = { oh: 'hai' }
