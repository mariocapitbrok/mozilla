// Object.getOwnPropertyNames()
// The Object.getOwnPropertyNames() static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

const object1 = {
  a: 1,
  b: 2,
  c: 3,
}

console.log(Object.getOwnPropertyNames(object1))
// Expected output: Array ["a", "b", "c"]
