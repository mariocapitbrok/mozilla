Object.isExtensible(obj)

/*
Parameters
  obj
    The object which should be checked.

Return value
A Boolean indicating whether or not the given object is extensible.

Description
Objects are extensible by default: they can have new properties added to them, and their [[Prototype]] can be re-assigned. An object can be marked as non-extensible using one of Object.preventExtensions(), Object.seal(), Object.freeze(), or Reflect.preventExtensions().
*/
