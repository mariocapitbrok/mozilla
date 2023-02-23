// Arrow function
reduceRight((accumulator, currentValue) => {
  /* … */
})
reduceRight((accumulator, currentValue, index) => {
  /* … */
})
reduceRight((accumulator, currentValue, index, array) => {
  /* … */
})
reduceRight((accumulator, currentValue, index, array) => {
  /* … */
}, initialValue)

// Callback function
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)

// Callback reducer function
reduceRight(function (accumulator, currentValue) {
  /* … */
})
reduceRight(function (accumulator, currentValue, index) {
  /* … */
})
reduceRight(function (accumulator, currentValue, index, array) {
  /* … */
})
reduceRight(function (accumulator, currentValue, index, array) {
  /* … */
}, initialValue)

/*
Parameters
  callbackFn
    A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

    The function is called with the following arguments:

  accumulator
    The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)

  currentValue
    The current element being processed in the array.

  index
    The index of the current element being processed in the array.

  array
    The array reduceRight() was called upon.

  initialValue Optional
    Value to use as accumulator to the first call of the callbackFn. If no initial value is supplied, the last element in the array will be used and skipped. Calling reduce or reduceRight on an empty array without an initial value creates a TypeError.

Return value
  The value that results from the reduction.

*/

/*
Description
The reduceRight() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in descending-index order, and accumulates them into a single value.

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

Unlike other iterative methods, reduce() does not accept a thisArg argument. callbackFn is always called with undefined as this, which gets substituted with globalThis if callbackFn is non-strict.

reduceRight() does not mutate the array on which it is called, but the function provided as callbackFn can. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

  callbackFn will not visit any elements added beyond the array's initial length when the call to reduceRight() began.
  Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
  If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.

Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The reduceRight() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/
