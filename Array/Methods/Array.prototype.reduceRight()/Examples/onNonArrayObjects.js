// The reduceRight() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
}
console.log(Array.prototype.reduceRight.call(arrayLike, (x, y) => x - y))
// -1, which is 4 - 3 - 2
