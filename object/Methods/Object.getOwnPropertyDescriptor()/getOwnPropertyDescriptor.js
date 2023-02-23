/*
Object.getOwnPropertyDescriptor()
The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.
*/

const object1 = {
  property1: 42,
}

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1')

console.log(descriptor1.configurable)
// Expected output: true

console.log(descriptor1.value)
// Expected output: 42
