new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)

Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)

//Note: Array() can be called with or without new. Both create a new Array instance.

/*
Parameters

  elementN
    A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.

  arrayLength
    If the only argument passed to the Array constructor is an integer between 0 and 232 - 1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values — see sparse arrays).

Exceptions

  RangeError
    Thrown if there's only one argument (arrayLength) and its value is not between 0 and 232 - 1 (inclusive).
*/
