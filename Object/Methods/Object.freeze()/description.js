/*
Description
Freezing an object is equivalent to preventing extensions and then changing all existing properties' descriptors' configurable to false — and for data properties, writable to false as well. Nothing can be added to or removed from the properties set of a frozen object. Any attempt to do so will fail, either silently or by throwing a TypeError exception (most commonly, but not exclusively, when in strict mode).

For data properties of a frozen object, their values cannot be changed since the writable and configurable attributes are set to false. Accessor properties (getters and setters) work the same — the property value returned by the getter may still change, and the setter can still be called without throwing errors when setting the property. Note that values that are objects can still be modified, unless they are also frozen. As an object, an array can be frozen; after doing so, its elements cannot be altered and no elements can be added to or removed from the array.

freeze() returns the same object that was passed into the function. It does not create a frozen copy.
*/

// A TypedArray or a DataView with elements will cause a TypeError, as they are views over memory and will definitely cause other possible issues:

Object.freeze(new Uint8Array(0)) // No elements
// Uint8Array []

Object.freeze(new Uint8Array(1)) // Has elements
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))) // No elements
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // No elements
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // Has elements
// TypeError: Cannot freeze array buffer views with elements

/*
Note that as the standard three properties (buf.byteLength, buf.byteOffset and buf.buffer) are read-only (as are those of an ArrayBuffer or SharedArrayBuffer), there is no reason for attempting to freeze these properties.

Unlike Object.seal(), existing properties in objects frozen with Object.freeze() are made immutable and data properties cannot be re-assigned.
*/
