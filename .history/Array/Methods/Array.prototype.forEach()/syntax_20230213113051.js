// Arrow function
forEach(element => {
  /* … */
})
forEach((element, index) => {
  /* … */
})
forEach((element, index, array) => {
  /* … */
})

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function (element) {
  /* … */
})
forEach(function (element, index) {
  /* … */
})
forEach(function (element, index, array) {
  /* … */
})
forEach(function (element, index, array) {
  /* … */
}, thisArg)

/*
Parameters
  callbackFn
    A function to execute for each element in the array. Its return value is discarded.

    The function is called with the following arguments:

  element
    The current element being processed in the array.

  index
    The index of the current element being processed in the array.

  array
    The array forEach() was called upon.

  thisArg Optional
    A value to use as this when executing callbackFn. See iterative methods.

Return value
  undefined.
*/

/*
Description
The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order. Unlike map(), forEach() always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

forEach() does not mutate the array on which it is called, but the function provided as callbackFn can. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

  callbackFn will not visit any elements added beyond the array's initial length when the call to forEach() began.
  Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
  If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.

Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The forEach() method is generic. It only expects the this value to have a length property and integer-keyed properties.

There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

Early termination may be accomplished with looping statements like for, for...of, and for...in. Array methods like every(), some(), find(), and findIndex() also stops iteration immediately when further iteration is not necessary.
*/
