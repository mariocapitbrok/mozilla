//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6)

console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]

/*
Description

The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

The filter() method is a copying method. It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array (with some filtered out). However, the function provided as callbackFn can mutate the array. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

callbackFn will not visit any elements added beyond the array's initial length when the call to filter() began.

Changes to already-visited indexes do not cause callbackFn to be invoked on them again.

If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.

Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The filter() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/
