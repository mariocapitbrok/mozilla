// Direct vs. inherited properties
// Only enumerable own properties cause propertyIsEnumerable() to return true, although all enumerable properties, including inherited ones, are visited by the for...in loop.

const o1 = {
  enumerableInherited: 'is enumerable',
}
Object.defineProperty(o1, 'nonEnumerableInherited', {
  value: 'is non-enumerable',
  enumerable: false,
})
const o2 = {
  // o1 is the prototype of o2
  __proto__: o1,
  enumerableOwn: 'is enumerable',
}
Object.defineProperty(o2, 'nonEnumerableOwn', {
  value: 'is non-enumerable',
  enumerable: false,
})

const resultA = o2.propertyIsEnumerable('enumerableInherited') // false
const resultB = o2.propertyIsEnumerable('nonEnumerableInherited') // false
const resultC = o2.propertyIsEnumerable('enumerableOwn') // true
const resultD = o2.propertyIsEnumerable('nonEnumerableOwn') // false

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
