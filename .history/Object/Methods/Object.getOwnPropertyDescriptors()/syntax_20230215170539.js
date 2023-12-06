Object.getOwnPropertyDescriptors(obj)

/*
Parameters
  obj
    The object for which to get all own property descriptors.

Return value
An object containing all own property descriptors of an object. Might be an empty object, if there are no properties.

Description
This method permits examination of the precise description of all own properties of an object. A property in JavaScript consists of either a string-valued name or a Symbol and a property descriptor. Further information about property descriptor types and their attributes can be found in Object.defineProperty().

A property descriptor is a record with some of the following attributes:

  value
    The value associated with the property (data descriptors only).

  writable
    true if and only if the value associated with the property may be changed (data descriptors only).

  get
    A function which serves as a getter for the property, or undefined if there is no getter (accessor descriptors only).

  set
    A function which serves as a setter for the property, or undefined if there is no setter (accessor descriptors only).

  configurable
    true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

  enumerable
    true if and only if this property shows up during enumeration of the properties on the corresponding object.
*/
