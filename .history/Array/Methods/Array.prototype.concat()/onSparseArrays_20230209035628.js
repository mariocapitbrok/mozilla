//If any of the source arrays is sparse, the resulting array will also be sparse:

console.log([1, , 3].concat([4, 5])) // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])) // [1, 2, 3, empty, 5]
