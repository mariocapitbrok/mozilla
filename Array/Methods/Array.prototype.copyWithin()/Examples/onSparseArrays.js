//copyWithin() will propagate empty slots.

console.log([1, , 3].copyWithin(2, 1, 2)) // [1, empty, empty]
