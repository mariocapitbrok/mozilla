Object.hasOwn(obj, prop)

/*
Parameters
obj
The JavaScript object instance to test.

prop
The String name or Symbol of the property to test.

Return value
true if the specified object has directly defined the specified property. Otherwise false

Description
The Object.hasOwn() method returns true if the specified property is a direct property of the object — even if the property value is null or undefined. The method returns false if the property is inherited, or has not been declared at all. Unlike the in operator, this method does not check for the specified property in the object's prototype chain.

It is recommended over Object.prototype.hasOwnProperty() because it works for objects created using Object.create(null) and with objects that have overridden the inherited hasOwnProperty() method. While it is possible to workaround these problems by calling Object.prototype.hasOwnProperty() on an external object, Object.hasOwn() is more intuitive.
*/
