// Freezing arrays

const a = [0]
Object.freeze(a) // The array cannot be modified now.

a[0] = 1 // fails silently

// In strict mode such attempt will throw a TypeError
function fail() {
  'use strict'
  a[0] = 1
}

fail()

// Attempted to push
a.push(2) // throws a TypeError
