// Using hasOwn to test for a property's existence
// The following code shows how to determine whether the example object contains a property named prop.

const example = {}
Object.hasOwn(example, 'prop') // false - 'prop' has not been defined

example.prop = 'exists'
Object.hasOwn(example, 'prop') // true - 'prop' has been defined

example.prop = null
Object.hasOwn(example, 'prop') // true - own property exists with value of null

example.prop = undefined
Object.hasOwn(example, 'prop') // true - own property exists with value of undefined
