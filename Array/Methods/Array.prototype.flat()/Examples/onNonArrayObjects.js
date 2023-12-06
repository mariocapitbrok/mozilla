//The flat() method reads the length property of this and then accesses each integer index. If the element is not an array, it's directly appended to the result. If the element is an array, it's flattened according to the depth parameter.

const arrayLike = {
  length: 3,
  0: [1, 2],
  // Array-like objects aren't flattened
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
}
console.log(Array.prototype.flat.call(arrayLike))
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
