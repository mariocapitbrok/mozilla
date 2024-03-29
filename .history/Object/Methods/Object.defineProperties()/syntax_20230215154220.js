Object.defineProperties(obj, props)

/*
Parameters
  obj
    The object on which to define or modify properties.

  props
    An object whose keys represent the names of properties to be defined or modified and whose values are objects describing those properties. Each value in props must be either a data descriptor or an accessor descriptor; it cannot be both (see Object.defineProperty() for more details).

    Data descriptors and accessor descriptors may optionally contain the following keys:

    configurable
      true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to false.

    enumerable
      true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

    A data descriptor also has the following optional keys:

  value
    The value associated with the property. Can be any valid JavaScript value (number, object, function, etc.). Defaults to undefined.

  writable
    true if and only if the value associated with the property may be changed with an assignment operator. Defaults to false.

  An accessor descriptor also has the following optional keys:

  get
    A function which serves as a getter for the property, or undefined if there is no getter. The function's return value will be used as the value of the property. Defaults to undefined.

  set
    A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as its only argument the new value being assigned to the property. Defaults to undefined.

  If a descriptor has neither of value, writable, get and set keys, it is treated as a data descriptor. If a descriptor has both value or writable and get or set keys, an exception is thrown.

Return value
The object that was passed to the function.
*/
