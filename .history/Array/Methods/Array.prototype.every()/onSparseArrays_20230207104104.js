// every() will NOT run its predicate on empty slots.

console.log([1, , 3].every(x => x !== undefined)) // true
console.log([2, , 2].every(x => x === 2)) // true
