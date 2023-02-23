// The configurable attribute controls whether the property can be deleted from the object and whether its attributes (other than value and writable) can be changed.

// his example illustrates a non-configurable accessor property.

const o = {}
Object.defineProperty(o, 'a', {
  get() {
    return 1
  },
  configurable: false,
})

Object.defineProperty(o, 'a', {
  configurable: true,
}) // throws a TypeError
Object.defineProperty(o, 'a', {
  enumerable: true,
}) // throws a TypeError
Object.defineProperty(o, 'a', {
  set() {},
}) // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', {
  get() {
    return 1
  },
}) // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', {
  value: 12,
}) // throws a TypeError
// ('value' can be changed when 'configurable' is false, but only when the property is a writable data property)

console.log(o.a) // 1
delete o.a // Nothing happens; throws an error in strict mode
console.log(o.a) // 1

// If the configurable attribute of o.a had been true, none of the errors would be thrown and the property would be deleted at the end.

// This example illustrates a non-configurable but writable data property. The property's value can still be changed, and writable can still be toggled from true to false.

const o = {}
Object.defineProperty(o, 'b', {
  writable: true,
  configurable: false,
})
console.log(o.b) // undefined
Object.defineProperty(o, 'b', {
  value: 1,
}) // Even when configurable is false, because the object is writable, we may still replace the value
console.log(o.b) // 1
o.b = 2 // We can change the value with assignment operators as well
console.log(o.b) // 2
// Toggle the property's writability
Object.defineProperty(o, 'b', {
  writable: false,
})
Object.defineProperty(o, 'b', {
  value: 1,
}) // TypeError: because the property is neither writable nor configurable, it cannot be modified
// At this point, there's no way to further modify 'b'
// or restore its writability

// This example illustrates a configurable but non-writable data property. The property's value may still be replaced with defineProperty (but not with assignment operators), and writable may be toggled.

const o = {}
Object.defineProperty(o, 'b', {
  writable: false,
  configurable: true,
})
Object.defineProperty(o, 'b', {
  value: 1,
}) // We can replace the value with defineProperty
console.log(o.b) // 1
o.b = 2 // throws TypeError in strict mode: cannot change a non-writable property's value with assignment
