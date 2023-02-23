// The enumerable property attribute defines whether the property is considered by Object.assign() or the spread operator. For non-Symbol properties, it also defines whether it shows up in a for...in loop and Object.keys() or not. For more information, see Enumerability and ownership of properties.

const o = {}
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true,
})
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false,
})
Object.defineProperty(o, 'c', {
  value: 3,
}) // enumerable defaults to false
o.d = 4 // enumerable defaults to true when creating a property by setting it
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true,
})
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false,
})

for (const i in o) {
  console.log(i)
}
// Logs 'a' and 'd' (always in that order)

Object.keys(o) // ['a', 'd']

o.propertyIsEnumerable('a') // true
o.propertyIsEnumerable('b') // false
o.propertyIsEnumerable('c') // false
o.propertyIsEnumerable('d') // true
o.propertyIsEnumerable(Symbol.for('e')) // true
o.propertyIsEnumerable(Symbol.for('f')) // false

const p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined
