Object.keys(obj)

/*
Parameters
  obj
    An object.

Return value
An array of strings representing the given object's own enumerable string-keyed property keys.

Description
Object.keys() returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.keys() is the same as that provided by a for...in loop.

If you need the property values, use Object.values() instead. If you need both the property keys and values, use Object.entries() instead.
*/
