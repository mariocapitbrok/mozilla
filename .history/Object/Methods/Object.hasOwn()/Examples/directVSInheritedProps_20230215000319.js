// Direct vs. inherited properties
// The following example differentiates between direct properties and properties inherited through the prototype chain:

const example = {}
example.prop = 'exists'

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, 'prop') // true
Object.hasOwn(example, 'toString') // false
Object.hasOwn(example, 'hasOwnProperty') // false

// The `in` operator will return true for direct or inherited properties:
'prop' in example // true
'toString' in example // true
'hasOwnProperty' in example // true
