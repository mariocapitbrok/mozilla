// Object.isFrozen()
// The Object.isFrozen() static method determines if an object is frozen.

const object1 = {
  property1: 42,
}

console.log(Object.isFrozen(object1))
// Expected output: false

Object.freeze(object1)

console.log(Object.isFrozen(object1))
// Expected output: true
