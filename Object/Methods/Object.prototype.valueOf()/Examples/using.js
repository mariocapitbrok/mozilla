/*
Using valueOf()
The base valueOf() method returns the this value itself, converted to an object if it isn't already. Therefore its return value will never be used by any primitive conversion algorithm.
*/

const obj = { foo: 1 }
console.log(obj.valueOf() === obj) // true

console.log(Object.prototype.valueOf.call('primitive'))
// [String: 'primitive'] (a wrapper object)
