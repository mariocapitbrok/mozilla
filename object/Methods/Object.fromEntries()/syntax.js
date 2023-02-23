Object.fromEntries(iterable)

/*
Parameters
  iterable
    An iterable, such as an Array or Map, containing a list of objects. Each object should have two properties:

  0
    A string or symbol representing the property key.

  1
    The property value.

  Typically, this object is implemented as a two-element array, with the first element being the property key and the second element being the property value.

Return value
A new object whose properties are given by the entries of the iterable.

Description
The Object.fromEntries() method takes a list of key-value pairs and returns a new object whose properties are given by those entries. The iterable argument is expected to be an object that implements an @@iterator method. The method returns an iterator object that produces two-element array-like objects. The first element is a value that will be used as a property key, and the second element is the value to associate with that property key.

Object.fromEntries() performs the reverse of Object.entries(), except that Object.entries() only returns string-keyed properties, while Object.fromEntries() can also create symbol-keyed properties.

Note: Unlike Array.from(), Object.fromEntries() does not use the value of this, so calling it on another constructor does not create objects of that type.
*/
