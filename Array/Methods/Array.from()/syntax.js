Array.from(arrayLike)

// Arrow function
Array.from(arrayLike, element => {
  /* … */
})
Array.from(arrayLike, (element, index) => {
  /* … */
})

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function (element) {
  /* … */
})
Array.from(arrayLike, function (element, index) {
  /* … */
})
Array.from(
  arrayLike,
  function (element) {
    /* … */
  },
  thisArg
)
Array.from(
  arrayLike,
  function (element, index) {
    /* … */
  },
  thisArg
)

/*
Parameters
arrayLike
  An iterable or array-like object to convert to an array.

mapFn Optional
  Map function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead.

  The function is called with the following arguments:

element
  The current element being processed in the array.

index
  The index of the current element being processed in the array.

thisArg Optional
  Value to use as this when executing mapFn.

Return value
  A new Array instance.

Description
Array.from() lets you create Arrays from:

  iterable objects (objects such as Map and Set); or, if the object is not iterable,
  array-like objects (objects with a length property and indexed elements).

Array.from() never creates a sparse array. If the arrayLike object is missing some index properties, they become undefined in the new array.

Array.from() has an optional parameter mapFn, which allows you to execute a function on each element of the array being created, similar to map(). More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array, and mapFn only receives two arguments (element, index) without the whole array, because the array is still under construction.

Note: This behavior is more important for typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type. Array.from() is implemented to have the same signature as TypedArray.from().

The Array.from() method is a generic factory method. For example, if a subclass of Array inherits the from() method, the inherited from() method will return new instances of the subclass instead of Array instances. In fact, the this value can be any constructor function that accepts a single argument representing the length of the new array. When an iterable is passed as arrayLike, the constructor is called with no arguments; when an array-like object is passed, the constructor is called with the normalized length of the array-like object. The final length will be set again when iteration finishes. If the this value is not a constructor function, the plain Array constructor is used instead.



*/
