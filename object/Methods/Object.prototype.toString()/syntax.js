toString()

/*
  Parameters
    By default toString() takes no parameters. However, objects that inherit from Object may override it with their own implementations that do take parameters. For example, the Number.prototype.toString() and BigInt.prototype.toString() methods take an optional radix parameter.

  Return value
    A string representing the object.
*/

/*
Description
JavaScript calls the toString method to convert an object to a primitive value. You rarely need to invoke the toString method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

This method is called in priority by string conversion, but numeric conversion and primitive conversion call valueOf() in priority. However, because the base valueOf() method returns an object, the toString() method is usually called in the end, unless the object overrides valueOf(). For example, +[1] returns 1, because its toString() method returns "1", which is then converted to a number.

All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the toString() method. When you create a custom object, you can override toString() to call a custom method, so that your custom object can be converted to a string value. Alternatively, you can add a @@toPrimitive method, which allows even more control over the conversion process, and will always be preferred over valueOf or toString for any type conversion.
*/
