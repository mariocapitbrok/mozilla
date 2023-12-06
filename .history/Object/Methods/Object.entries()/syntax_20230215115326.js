Object.entries(obj)

/*
Parameters
  obj
    An object.

Return value
An array of the given object's own enumerable string-keyed property key-value pairs. Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.

Description
Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.entries() is the same as that provided by a for...in loop.

If you only need the property keys, use Object.keys() instead. If you only need the property values, use Object.values() instead.
*/
