// Using propertyIsEnumerable()
// The following example shows the use of propertyIsEnumerable() on objects and arrays.

const o = {}
const a = []
o.prop = 'is enumerable'
a[0] = 'is enumerable'

const resultO = o.propertyIsEnumerable('prop') // true
const resultA = a.propertyIsEnumerable(0) // true

console.log(resultO)
console.log(resultA)
