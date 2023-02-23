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
