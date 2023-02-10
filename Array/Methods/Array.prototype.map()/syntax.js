// Arrow function
map(element => {
  /* … */
})
map((element, index) => {
  /* … */
})
map((element, index, array) => {
  /* … */
})

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function (element) {
  /* … */
})
map(function (element, index) {
  /* … */
})
map(function (element, index, array) {
  /* … */
})
map(function (element, index, array) {
  /* … */
}, thisArg)

/*
Parameters
callbackFn
  A function to execute for each element in the array. Its return value is added as a single element in the new array.

  The function is called with the following arguments:

    element
    The current element being processed in the array.

    index
    The index of the current element being processed in the array.

    array
    The array map() was called upon.

    thisArg Optional
    A value to use as this when executing callbackFn. See iterative methods.

Return value
A new array with each element being the result of the callback function.

Description
The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

The map() method is a copying method. It does not alter this. However, the function provided as callbackFn can mutate the array. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

  callbackFn will not visit any elements added beyond the array's initial length when the call to map() began.
  Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
  If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.
  Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The map() method is generic. It only expects the this value to have a length property and integer-keyed properties.

Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.
*/
