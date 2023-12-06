//Edge cases

//If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

//If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

//If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:

const getMax = (a, b) => Math.max(a, b)

// callback is invoked for each element in the array starting at index 0
;[1, 100].reduce(getMax, 50) // 100
;[50].reduce(getMax, 10) // 50

// callback is invoked once for element at index 1
;[1, 100].reduce(getMax) // 100

// callback is not invoked
;[50].reduce(getMax) // 50
;[].reduce(getMax, 1) // 1
;[].reduce(getMax) // TypeError
