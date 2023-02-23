// Testing symbol properties
// Symbol properties are also supported by propertyIsEnumerable(). Note that most enumeration methods only visit string properties; enumerability of symbol properties is only useful when using Object.assign() or spread syntax. For more information, see Enumerability and ownership of properties.

const sym = Symbol('enumerable')
const sym2 = Symbol('non-enumerable')
const o = {
  [sym]: 'is enumerable',
}
Object.defineProperty(o, sym2, {
  value: 'is non-enumerable',
  enumerable: false,
})

o.propertyIsEnumerable(sym) // true
o.propertyIsEnumerable(sym2) // false
