// Arrow function
findLast(element => {
  /* … */
})
findLast((element, index) => {
  /* … */
})
findLast((element, index, array) => {
  /* … */
})

// Callback function
findLast(callbackFn)
findLast(callbackFn, thisArg)

// Inline callback function
findLast(function (element) {
  /* … */
})
findLast(function (element, index) {
  /* … */
})
findLast(function (element, index, array) {
  /* … */
})
findLast(function (element, index, array) {
  /* … */
}, thisArg)

/*
Parameters
  callbackFn
    A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.

    The function is called with the following arguments:

  element
    The current element being processed in the array.

  index
    The index of the current element being processed in the array.

  array
    The array findLast() was called upon.

  thisArg Optional
    A value to use as this when executing callbackFn. See iterative methods.

Return value
  The value of the element in the array with the highest index value that satisfies the provided testing function; undefined if no matching element is found.
*/
