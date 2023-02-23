// Converting a Map to an Object

// With Object.fromEntries, you can convert from Map to Object:

const map = new Map([
  ['foo', 'bar'],
  ['baz', 42],
])
const obj = Object.fromEntries(map)
console.log(obj) // { foo: "bar", baz: 42 }
