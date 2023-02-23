valueOf()

/*
Parameters
  None.

Return value
The this value, converted to an object.

Note: In order for valueOf to be useful during type conversion, it must return a primitive. Because all primitive types have their own valueOf() methods, calling aPrimitiveValue.valueOf() generally does not invoke Object.prototype.valueOf().

Description
JavaScript calls the valueOf method to convert an object to a primitive value. You rarely need to invoke the valueOf method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

This method is called in priority by numeric conversion and primitive conversion, but string conversion calls toString() in priority, and toString() is very likely to return a string value (even for the Object.prototype.toString() base implementation), so valueOf() is usually not called in this case.

All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the toString() method. The Object.prototype.valueOf() base implementation is deliberately useless: by returning an object, its return value will never be used by any primitive conversion algorithm. Many built-in objects override this method to return an appropriate primitive value. When you create a custom object, you can override valueOf() to call a custom method, so that your custom object can be converted to a primitive value. Generally, valueOf() is used to return a value that is most meaningful for the object — unlike toString(), it does not need to be a string. Alternatively, you can add a @@toPrimitive method, which allows even more control over the conversion process, and will always be preferred over valueOf or toString for any type conversion.
*/
