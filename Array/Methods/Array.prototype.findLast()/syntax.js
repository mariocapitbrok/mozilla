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

/*
Description
  The findLast() method is an iterative method. It calls a provided callbackFn function once for each element in an array in descending-index order, until callbackFn returns a truthy value. findLast() then returns that element and stops iterating through the array. If callbackFn never returns a truthy value, findLast() returns undefined.

    callbackFn is invoked for every index of the array, not just those with assigned values. Empty slots in sparse arrays behave the same as undefined.

    findLast() does not mutate the array on which it is called, but the function provided as callbackFn can. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

    callbackFn will not visit any elements added beyond the array's initial length when the call to findLast() began.
    Changes to already-visited indexes do not cause callbackFn to be invoked on them again.

    If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are visited as if they were undefined.

    Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The findLast() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/
