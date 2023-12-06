/*
Description
Object.setPrototypeOf() is generally considered the proper way to set the prototype of an object. You should always use it in favor of the deprecated Object.prototype.__proto__ accessor.

If the obj parameter is not an object (e.g. number, string, etc.), this method does nothing — without coercing it to an object or attempting to set its prototype — and directly returns obj as a primitive value. If prototype is the same value as the prototype of obj, then obj is directly returned, without causing a TypeError even when obj has immutable prototype.

For security concerns, there are certain built-in objects that are designed to have an immutable prototype. This prevents prototype pollution attacks, especially proxy-related ones. The core language only specifies Object.prototype as an immutable prototype exotic object, whose prototype is always null. In browsers, window and location are two other very common examples.
*/

Object.isExtensible(Object.prototype) // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}) // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null) // No error; the prototype of `Object.prototype` is already `null`
