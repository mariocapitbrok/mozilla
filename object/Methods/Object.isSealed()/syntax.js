Object.isSealed(obj)

/*
Parameters
  obj
    The object which should be checked.

Return value
A Boolean indicating whether or not the given object is sealed.

Description
Returns true if the object is sealed, otherwise false. An object is sealed if 
  1 it is not extensible and 
  2 if all its properties are non-configurable and therefore not removable (but not necessarily non-writable).
*/
