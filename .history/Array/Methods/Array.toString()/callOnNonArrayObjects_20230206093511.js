// Same as join(), toString() is generic and only reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
}

const result = Array.prototype.toString.call(arrayLike)

console.log(Array.prototype.toString.call(arrayLike))
// 1,2,3
