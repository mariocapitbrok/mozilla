//The array returned from slice() may be sparse if the source is sparse.

console.log([1, 2, , 4, 5].slice(1, 4)) // [2, empty, 4]
