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

Description
All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the isPrototypeOf() method. This method allows you to check whether or not the object exists within another object's prototype chain. If the object passed as the parameter is not an object (i.e. a primitive), the method directly returns false. Otherwise, the this value is converted to an object, and the prototype chain of object is searched for the this value, until the end of the chain is reached or the this value is found.
    */
