// Adding properties and default values

// It is important to consider the way default values of attributes are applied. There is often a difference between using dot notation to assign a value and using Object.defineProperty(), as shown in the example below.

const o = {}

o.a = 1
// is equivalent to:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
})

// On the other hand,
Object.defineProperty(o, 'a', { value: 1 })
// is equivalent to:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
})
