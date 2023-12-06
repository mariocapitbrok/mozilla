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
