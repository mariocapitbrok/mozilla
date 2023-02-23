// Non-object argument
// In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError. In ES2015, it will return true without any errors if a non-object argument is passed, since primitives are, by definition, immutable.

Object.isSealed(1)
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1)
// true                          (ES2015 code)
