// Primitives will be wrapped to objects

const v1 = 'abc'
const v2 = true
const v3 = 10
const v4 = Symbol('foo')

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4)
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj) // { "0": "a", "1": "b", "2": "c" }
