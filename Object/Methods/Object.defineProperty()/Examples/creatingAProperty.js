// Creating a property
// When the property specified doesn't exist in the object, Object.defineProperty() creates a new property as described. Fields may be omitted from the descriptor and default values for those fields are inputted.

const o = {} // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
})
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
let bValue = 38
Object.defineProperty(o, 'b', {
  get() {
    return bValue
  },
  set(newValue) {
    bValue = newValue
  },
  enumerable: true,
  configurable: true,
})
o.b // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef
  },
})
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors
