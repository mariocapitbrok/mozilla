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

*/
