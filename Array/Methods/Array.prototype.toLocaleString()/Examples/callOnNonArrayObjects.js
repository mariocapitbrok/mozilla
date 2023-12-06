// The toLocaleString() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
}
console.log(Array.prototype.toLocaleString.call(arrayLike))
// 1,2,3
