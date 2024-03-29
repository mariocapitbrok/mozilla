Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* … ,*/ elementN)

/*
Parameters
  elementN
    Elements used to create the array.

Return value
  A new Array instance.

Description
  The difference between Array.of() and the Array() constructor is in the handling of single arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7. (That implies an array of 7 empty slots, not slots with actual undefined values.)

  Array.of(7); // [7]
  Array(7); // array of 7 empty slots

  Array.of(1, 2, 3); // [1, 2, 3]
  Array(1, 2, 3); // [1, 2, 3]

The Array.of() method is a generic factory method. For example, if a subclass of Array inherits the of() method, the inherited of() method will return new instances of the subclass instead of Array instances. In fact, the this value can be any constructor function that accepts a single argument representing the length of the new array, and the constructor will be called with the number of arguments passed to of(). The final length will be set again when all elements are assigned. If the this value is not a constructor function, the plain Array constructor is used instead.

*/
