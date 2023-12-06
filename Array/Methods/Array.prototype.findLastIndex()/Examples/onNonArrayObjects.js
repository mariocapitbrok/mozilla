// The findLastIndex() method reads the length property of this and then accesses each integer index.

const a = {
  length: 6,
  0: 2,
  1: 3,
  2: 6,
  3: 9,
  4: 7.3,
  5: 4,
}

const result = Array.prototype.findLastIndex.call(a, x => !Number.isInteger(x))

console.log(result) // 4
