isPrototypeOf(object)

/*
Parameters
  object
    The object whose prototype chain will be searched.

Return value
  A boolean indicating whether the calling object (this) lies in the prototype chain of object. Directly returns false when object is not an object (i.e. a primitive).

Errors thrown
  TypeError
    Thrown if this is null or undefined (because it can't be converted to an object).
*/
