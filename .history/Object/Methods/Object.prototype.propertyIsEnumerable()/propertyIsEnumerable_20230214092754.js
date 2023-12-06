// Object.prototype.propertyIsEnumerable()
// The propertyIsEnumerable() method returns a boolean indicating whether the specified property is the object's enumerable own property.

const object1 = {}
const array1 = []
object1.property1 = 42
array1[0] = 42

console.log(object1.propertyIsEnumerable('property1'))
// Expected output: true

console.log(array1.propertyIsEnumerable(0))
// Expected output: true

console.log(array1.propertyIsEnumerable('length'))
// Expected output: false
