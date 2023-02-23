push(element0)
push(element0, element1)
push(element0, element1, /* … ,*/ elementN)

/*
Parameters
  elementN
    The element(s) to add to the end of the array.

Return value
  The new length property of the object upon which the method was called.

Description
  The push() method appends values to an array.

Array.prototype.unshift() has similar behavior to push(), but applied to the start of an array.

The push() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with elements appended to the end, you can use arr.concat([element0, element1,... , elementN]) instead. Notice that the elements are wrapped in an extra array — otherwise, if the element is an array itself, it would be spread instead of pushed as a single element due to the behavior of concat().

The push() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.
*/
