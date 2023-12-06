// When the writable property attribute is false, the property is said to be "non-writable". It cannot be reassigned. Trying to write to a non-writable property doesn't change it and results in an error in strict mode.

const o = {} // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false,
})

console.log(o.a) // 37
o.a = 25 // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a) // 37; the assignment didn't work

// strict mode
;(() => {
  'use strict'
  const o = {}
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false,
  })
  o.b = 3 // throws TypeError: "b" is read-only
  return o.b // returns 2 without the line above
})()
