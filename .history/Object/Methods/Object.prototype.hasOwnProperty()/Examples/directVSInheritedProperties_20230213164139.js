// Direct vs. inherited properties

// The following example differentiates between direct properties and properties inherited through the prototype chain:

const example = {}
example.prop = 'exists'

// `hasOwnProperty` will only return true for direct properties:
example.hasOwnProperty('prop') // true
example.hasOwnProperty('toString') // false
example.hasOwnProperty('hasOwnProperty') // false

// The `in` operator will return true for direct or inherited properties:
'prop' in example // true
'toString' in example // true
'hasOwnProperty' in example // true
