/*
Assigning the constructor property to an object
One can assign the constructor property of non-primitives.
*/

const arr = []
arr.constructor = String
arr.constructor === String // true
arr instanceof String // false
arr instanceof Array // true

const foo = new Foo()
foo.constructor = 'bar'
foo.constructor === 'bar' // true

// etc.

// This does not overwrite the old constructor property — it was originally present on the instance's [[Prototype]], not as its own property.

const arr = []
Object.hasOwn(arr, 'constructor') // false
Object.hasOwn(Object.getPrototypeOf(arr), 'constructor') // true

arr.constructor = String
Object.hasOwn(arr, 'constructor') // true — the instance property shadows the one on its prototype

// But even when Object.getPrototypeOf(a).constructor is re-assigned, it won't change other behaviors of the object. For example, the behavior of instanceof is controlled by Symbol.hasInstance, not constructor:

const arr = []
arr.constructor = String
arr instanceof String // false
arr instanceof Array // true

// There is nothing protecting the constructor property from being re-assigned or shadowed, so using it to detect the type of a variable should usually be avoided in favor of less fragile ways like instanceof and Symbol.toStringTag for objects, or typeof for primitives.
