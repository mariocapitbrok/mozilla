// Object.getOwnPropertyDescriptors()

// The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object.

const object1 = {
  property1: 42,
}

const descriptors1 = Object.getOwnPropertyDescriptors(object1)

console.log(descriptors1.property1.writable)
// Expected output: true

console.log(descriptors1.property1.value)
// Expected output: 42
