pop()

/*
Return value
  The removed element from the array; undefined if the array is empty.

Description
  The pop() method removes the last element from an array and returns that value to the caller. If you call pop() on an empty array, it returns undefined.

  Array.prototype.shift() has similar behavior to pop(), but applied to the first element in an array.

  The pop() method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with the last element removed, you can use arr.slice(0, -1) instead.

  The pop() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.
*/
