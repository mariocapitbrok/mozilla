Object.isFrozen(obj)

/*
Parameters
  obj
    The object which should be checked.

Return value
A Boolean indicating whether or not the given object is frozen.

Description
An object is frozen if and only if 
  1 it is not extensible, 
  2 all its properties are non-configurable, 
  3 and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.
*/
