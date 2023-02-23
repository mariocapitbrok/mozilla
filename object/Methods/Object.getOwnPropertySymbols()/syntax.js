Object.getOwnPropertySymbols(obj)

/*
Parameters
  obj
    The object whose symbol properties are to be returned.

Return value
An array of all symbol properties found directly upon the given object.

Description
Similar to Object.getOwnPropertyNames(), you can get all symbol properties of a given object as an array of symbols. Note that Object.getOwnPropertyNames() itself does not contain the symbol properties of an object and only the string properties.

As all objects have no own symbol properties initially, Object.getOwnPropertySymbols() returns an empty array unless you have set symbol properties on your object.
*/
