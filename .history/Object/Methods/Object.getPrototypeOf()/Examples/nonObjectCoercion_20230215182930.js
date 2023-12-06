/*
Non-object coercion
In ES5, it will throw a TypeError exception if the obj parameter isn't an object. In ES2015, the parameter will be coerced to an Object.
*/

Object.getPrototypeOf('foo')
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo')
// String.prototype                  (ES2015 code)
