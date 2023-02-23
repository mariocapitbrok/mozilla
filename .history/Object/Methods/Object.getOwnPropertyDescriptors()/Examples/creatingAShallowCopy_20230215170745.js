// Creating a shallow copy
// Whereas the Object.assign() method will only copy enumerable and own properties from a source object to a target object, you are able to use this method and Object.create() for a shallow copy between two unknown objects:

Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
