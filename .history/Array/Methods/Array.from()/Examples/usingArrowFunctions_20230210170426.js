// Using an arrow function as the map function to
// manipulate the elements
const resultA = Array.from([1, 2, 3], x => x + x)

console.log(resultA)
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
const resultB = Array.from({ length: 5 }, (v, i) => i)

console.log(resultB)
// [0, 1, 2, 3, 4]
