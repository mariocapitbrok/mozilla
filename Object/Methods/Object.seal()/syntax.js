Object.seal(obj)

/*
Parameters
  obj
    The object which should be sealed.

Return value
The object being sealed.

Description
Sealing an object is equivalent to preventing extensions and then changing all existing properties' descriptors to configurable: false. This has the effect of making the set of properties on the object fixed. Making all properties non-configurable also prevents them from being converted from data properties to accessor properties and vice versa, but it does not prevent the values of data properties from being changed. Attempting to delete or add properties to a sealed object, or to convert a data property to accessor or vice versa, will fail, either silently or by throwing a TypeError (most commonly, although not exclusively, when in strict mode code).

The prototype chain remains untouched. However, due to the effect of preventing extensions, the [[Prototype]] cannot be reassigned.

Unlike Object.freeze(), objects sealed with Object.seal() may have their existing properties changed, as long as they are writable.
*/
