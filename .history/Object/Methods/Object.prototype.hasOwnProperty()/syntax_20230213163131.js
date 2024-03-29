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

// The method can be called on most JavaScript objects, because most objects descend from Object, and hence inherit its methods. For example Array is an Object, so you can use hasOwnProperty() method to check whether an index exists:

const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange']
fruits.hasOwnProperty(3) // true ('Orange')
fruits.hasOwnProperty(4) // false - not defined

// The method will not be available in objects where it is reimplemented, or on objects created using Object.create(null) (as these don't inherit from Object.prototype). Examples for these cases are given below.
