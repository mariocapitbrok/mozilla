Object.setPrototypeOf(obj, prototype)

/*
Parameters
  obj
    The object which is to have its prototype set.

  prototype
    The object's new prototype (an object or null).

Return value
The specified object.

Exceptions
TypeError
  Thrown if one of the following conditions is met:

    The obj parameter is undefined or null.
    The obj parameter is non-extensible, or it's an immutable prototype exotic object, such as Object.prototype or window. However, the error is not thrown if the new prototype is the same value as the original prototype of obj.
    The prototype parameter is not an object or null.


*/
