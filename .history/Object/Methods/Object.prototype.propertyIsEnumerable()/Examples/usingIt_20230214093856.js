// Using propertyIsEnumerable()
// The following example shows the use of propertyIsEnumerable() on objects and arrays.

const o = {}
const a = []
o.prop = 'is enumerable'
a[0] = 'is enumerable'

o.propertyIsEnumerable('prop') // true
a.propertyIsEnumerable(0) // true
