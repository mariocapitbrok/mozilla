Object.create(proto)
Object.create(proto, propertiesObject)

/*
Parameters
  proto
    The object which should be the prototype of the newly-created object.

  propertiesObject Optional
    If specified and not undefined, an object whose enumerable own properties specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of Object.defineProperties().

Return value
A new object with the specified prototype object and properties.

Exceptions
TypeError
Thrown if proto is neither null nor an Object.
*/
