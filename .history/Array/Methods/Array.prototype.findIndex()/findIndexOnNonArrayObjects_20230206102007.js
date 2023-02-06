// The findIndex() method reads the length property of this and then accesses each integer index.

const a = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
}

const result = Array.prototype.findIndex.call(a, x => !Number.isInteger(x))

console.log(result) // 1
