//If the this value is not an array, it is converted to an object and then treated in the same way as the arguments for concat(). In this case the return value is always a plain new array.

console.log(Array.prototype.concat.call({}, 1, 2, 3)) // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)) // [ [Number: 1], 2, 3 ]

const arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 }
console.log(Array.prototype.concat.call(arrayLike, 3, 4)) // [1, 2, 3, 4]
