Object.values(obj)

/*
Parameters
  obj
    An object.

Return value
An array containing the given object's own enumerable string-keyed property values.

Description
Object.values() returns an array whose elements are strings corresponding to the enumerable string-keyed property values found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.values() is the same as that provided by a for...in loop.

If you need the property keys, use Object.keys() instead. If you need both the property keys and values, use Object.entries() instead.
*/
