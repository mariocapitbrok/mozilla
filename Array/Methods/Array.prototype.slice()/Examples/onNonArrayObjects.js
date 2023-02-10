//The slice() method reads the length property of this. It then reads the integer-keyed properties from start to end and defines them on a newly created array.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
}
console.log(Array.prototype.slice.call(arrayLike, 1, 3))
// [ 3, 4 ]
