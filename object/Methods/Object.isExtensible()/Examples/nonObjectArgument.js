// Non-object argument
// In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError. In ES2015, it will return false without any errors if a non-object argument is passed, since primitives are, by definition, immutable.

Object.isExtensible(1)
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1)
// false                         (ES2015 code)
