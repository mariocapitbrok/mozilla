// Arrow function
reduce((accumulator, currentValue) => {
  /* … */
})
reduce((accumulator, currentValue, currentIndex) => {
  /* … */
})
reduce((accumulator, currentValue, currentIndex, array) => {
  /* … */
})

reduce((accumulator, currentValue) => {
  /* … */
}, initialValue)
reduce((accumulator, currentValue, currentIndex) => {
  /* … */
}, initialValue)
reduce((accumulator, currentValue, currentIndex, array) => {
  /* … */
}, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function (accumulator, currentValue) {
  /* … */
})
reduce(function (accumulator, currentValue, currentIndex) {
  /* … */
})
reduce(function (accumulator, currentValue, currentIndex, array) {
  /* … */
})

reduce(function (accumulator, currentValue) {
  /* … */
}, initialValue)
reduce(function (accumulator, currentValue, currentIndex) {
  /* … */
}, initialValue)
reduce(function (accumulator, currentValue, currentIndex, array) {
  /* … */
}, initialValue)

/*
Parameters
  callbackFn
    A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

The function is called with the following arguments:
  accumulator
    The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

  currentValue
    The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

  currentIndex
    The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

  array
    The array reduce() was called upon.

  initialValue Optional
    A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
*/

/*
Return value
  The value that results from running the "reducer" callback function to completion over the entire array.

Exceptions
  TypeError
    The array contains no elements and initialValue is not provided.
*/

/*
Description
The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

Unlike other iterative methods, reduce() does not accept a thisArg argument. callbackFn is always called with undefined as this, which gets substituted with globalThis if callbackFn is non-strict.

reduce() is a central concept in functional programming, where it's not possible to mutate any value, so in order to accumulate all values in an array, one must return a new accumulator value on every iteration. This convention propagates to JavaScript's reduce(): you should use spreading or other copying methods where possible to create new arrays and objects as the accumulator, rather than mutating the existing one. If you decided to mutate the accumulator instead of copying it, remember to still return the modified object in the callback, or the next iteration will receive undefined.

reduce() does not mutate the array on which it is called, but the function provided as callbackFn can. Note, however, that the length of the array is saved before the first invocation of callbackFn. 

Therefore:
  callbackFn will not visit any elements added beyond the array's initial length when the call to reduce() began.
  Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
  If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.

Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The reduce() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/
