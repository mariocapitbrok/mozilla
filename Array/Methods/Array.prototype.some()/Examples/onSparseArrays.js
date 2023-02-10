//some() will not run its predicate on empty slots.

console.log([1, , 3].some(x => x === undefined)) // false
console.log([1, , 1].some(x => x !== 1)) // false
console.log([1, undefined, 1].some(x => x !== 1)) // true
