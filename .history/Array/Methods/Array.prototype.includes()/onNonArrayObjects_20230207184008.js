//The includes() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
}
console.log(Array.prototype.includes.call(arrayLike, 2))
// true
console.log(Array.prototype.includes.call(arrayLike, 1))
// false
