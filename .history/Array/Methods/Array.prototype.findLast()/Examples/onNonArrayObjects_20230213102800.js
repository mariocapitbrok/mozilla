//The findLast() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
}
console.log(Array.prototype.findLast.call(arrayLike, x => Number.isInteger(x))) // 4
