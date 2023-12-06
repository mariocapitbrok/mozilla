// User-defined vs. built-in objects
// Most built-in properties are non-enumerable by default, while user-created object properties are often enumerable, unless explicitly designated otherwise.

const a = ['is enumerable']

a.propertyIsEnumerable(0) // true
a.propertyIsEnumerable('length') // false

Math.propertyIsEnumerable('random') // false
globalThis.propertyIsEnumerable('Math') // false
