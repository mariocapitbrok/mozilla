Object.preventExtensions(obj)

/*
Parameters
  obj
    The object which should be made non-extensible.

Return value
The object being made non-extensible.

Description
An object is extensible if new properties can be added to it. Object.preventExtensions() marks an object as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible. Note that the properties of a non-extensible object, in general, may still be deleted. Attempting to add new properties to a non-extensible object will fail, either silently or, in strict mode, throwing a TypeError.

Unlike Object.seal() and Object.freeze(), Object.preventExtensions() invokes an intrinsic JavaScript behavior and cannot be replaced with a composition of several other operations. It also has its Reflect counterpart (which only exists for intrinsic operations), Reflect.preventExtensions().

Object.preventExtensions() only prevents addition of own properties. Properties can still be added to the object prototype.

This method makes the [[Prototype]] of the target immutable; any [[Prototype]] re-assignment will throw a TypeError. This behavior is specific to the internal [[Prototype]] property; other properties of the target object will remain mutable.

There is no way to make an object extensible again once it has been made non-extensible.
*/
