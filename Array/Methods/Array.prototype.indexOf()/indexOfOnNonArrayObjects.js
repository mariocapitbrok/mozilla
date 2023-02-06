//The indexOf() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
}

resultA = Array.prototype.indexOf.call(arrayLike, 2)
resultB = Array.prototype.indexOf.call(arrayLike, 5)

console.log(resultA)
// 0

console.log(resultB)
// -1
