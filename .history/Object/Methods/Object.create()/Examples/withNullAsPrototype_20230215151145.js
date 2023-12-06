// With Object.create(), we can create an object with null as prototype. The equivalent syntax in object initializers would be the __proto__ key.

o = Object.create(null)
// Is equivalent to:
o = { __proto__: null }
