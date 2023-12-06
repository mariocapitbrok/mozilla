//The flatMap() method reads the length property of this and then accesses each integer index. If the return value of the callback function is not an array, it is always directly appended to the result array.

const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
}
console.log(Array.prototype.flatMap.call(arrayLike, x => [x, x * 2]))
// [1, 2, 2, 4, 3, 6]

// Array-like objects returned from the callback won't be flattened
console.log(
  Array.prototype.flatMap.call(arrayLike, x => ({
    length: 1,
    0: x,
  }))
)
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
