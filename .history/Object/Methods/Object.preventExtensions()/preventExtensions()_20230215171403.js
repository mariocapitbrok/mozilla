// Object.preventExtensions()

// The Object.preventExtensions() static method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It also prevents the object's prototype from being re-assigned.

const object1 = {}

Object.preventExtensions(object1)

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
  })
} catch (e) {
  console.log(e)
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}
