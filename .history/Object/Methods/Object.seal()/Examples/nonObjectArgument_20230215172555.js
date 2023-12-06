/*
Non-object argument
In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError. In ES2015, a non-object argument will be returned as-is without any errors, since primitives are already, by definition, immutable.
*/
Object.seal(1)
// TypeError: 1 is not an object (ES5 code)

Object.seal(1)
// 1                             (ES2015 code)
