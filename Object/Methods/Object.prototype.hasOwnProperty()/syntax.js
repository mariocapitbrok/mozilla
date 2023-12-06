hasOwnProperty(prop)

/*
Parameters
  prop
    The String name or Symbol of the property to test.

Return value
  Returns true if the object has the specified property as own property; false otherwise.

Description
  The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined. The method returns false if the property is inherited, or has not been declared at all. Unlike the in operator, this method does not check for the specified property in the object's prototype chain.
*/
