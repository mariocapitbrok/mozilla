shift()

/*
Return value
  The removed element from the array; undefined if the array is empty.

Description
  The shift() method removes the element at the zeroth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.

  The pop() method has similar behavior to shift(), but applied to the last element in an array.

  The shift() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with the first element removed, you can use arr.slice(1) instead.

  The shift() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.
*/
