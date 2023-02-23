Object.getOwnPropertyDescriptor(obj, prop)

/*
Parameters
obj
The object in which to look for the property.

prop
The name or Symbol of the property whose description is to be retrieved.

Return value
A property descriptor of the given property if it exists on the object, undefined otherwise.

Description
This method permits examination of the precise description of a property. A property in JavaScript consists of either a string-valued name or a Symbol and a property descriptor. Further information about property descriptor types and their attributes can be found in Object.defineProperty().

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
