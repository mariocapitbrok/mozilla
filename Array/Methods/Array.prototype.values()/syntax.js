values()

/*
Return value
  A new iterable iterator object.

Description
  Array.prototype.values() is the default implementation of Array.prototype[@@iterator]().

  Array.prototype.values === Array.prototype[Symbol.iterator]; // true

  When used on sparse arrays, the values() method iterates empty slots as if they have the value undefined.

  The values() method is generic. It only expects the this value to have a length property and integer-keyed properties.

*/
