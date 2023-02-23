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
