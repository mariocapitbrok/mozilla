//The map() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
}
console.log(Array.prototype.map.call(arrayLike, x => x ** 2))
// [ 4, 9, 16 ]
