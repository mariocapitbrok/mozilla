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

o2.propertyIsEnumerable('enumerableInherited') // false
o2.propertyIsEnumerable('nonEnumerableInherited') // false
o2.propertyIsEnumerable('enumerableOwn') // true
o2.propertyIsEnumerable('nonEnumerableOwn') // false
