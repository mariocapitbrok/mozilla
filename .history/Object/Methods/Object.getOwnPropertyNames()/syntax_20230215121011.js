Object.getOwnPropertyNames(obj)

/*
Parameters
  obj
    The object whose enumerable and non-enumerable properties are to be returned.

Return value
An array of strings that corresponds to the properties found directly in the given object.

Description
Object.getOwnPropertyNames() returns an array whose elements are strings corresponding to the enumerable and non-enumerable properties found directly in a given object obj. The ordering of the enumerable properties in the array is consistent with the ordering exposed by a for...in loop (or by Object.keys()) over the properties of the object. The non-negative integer keys of the object (both enumerable and non-enumerable) are added in ascending order to the array first, followed by the string keys in the order of insertion.
*/
