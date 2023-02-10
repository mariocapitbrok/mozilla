// Arrow function
flatMap(element => {
  /* … */
})
flatMap((element, index) => {
  /* … */
})
flatMap((element, index, array) => {
  /* … */
})

// Callback function
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Inline callback function
flatMap(function (element) {
  /* … */
})
flatMap(function (element, index) {
  /* … */
})
flatMap(function (element, index, array) {
  /* … */
})
flatMap(function (element, index, array) {
  /* … */
}, thisArg)

/*
Parameters
callbackFn
A function to execute for each element in the array. It should return an array containing new elements of the new array, or a single non-array value to be added to the new array.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array flatMap() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. See iterative methods.

Return value
A new array with each element being the result of the callback function and flattened by a depth of 1.

Description
The flatMap() method is an iterative method. See Array.prototype.map() for a detailed description of the callback function. The flatMap() method is identical to map(callbackFn, thisArg) followed by flat(1) — for each element, it produces an array of new elements, and concatenates the resulting arrays together to form a new array.

The flatMap() method is generic. It only expects the this value to have a length property and integer-keyed properties. However, the value returned from callbackFn must be an array if it is to be flattened.
*/
