propertyIsEnumerable(prop)

/*
Parameters
  prop
    The name of the property to test. Can be a string or a Symbol.

Return value
  A boolean value indicating whether the specified property is enumerable and is the object's own property.

Description
All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the propertyIsEnumerable() method. This method determines if the specified property, string or symbol, is an enumerable own property of the object. If the object does not have the specified property, this method returns false.

This method is equivalent to Object.getOwnPropertyDescriptor(obj, prop)?.enumerable ?? false.
*/
