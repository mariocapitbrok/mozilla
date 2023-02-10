//The callbackFn won't be called for empty slots in the source array because map() doesn't, while flat() ignores empty slots in the returned arrays.

console.log([1, 2, , 4, 5].flatMap(x => [x, x * 2])) // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap(x => [, x * 2])) // [2, 4, 6, 8]
