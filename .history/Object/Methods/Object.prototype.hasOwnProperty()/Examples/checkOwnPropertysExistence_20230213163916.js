// The following code shows how to determine whether the example object contains a property named prop.

const example = {}
example.hasOwnProperty('prop') // false

example.prop = 'exists'
example.hasOwnProperty('prop') // true - 'prop' has been defined

example.prop = null
example.hasOwnProperty('prop') // true - own property exists with value of null

example.prop = undefined
example.hasOwnProperty('prop') // true - own property exists with value of undefined
