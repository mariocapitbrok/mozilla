//The values() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
}
for (const entry of Array.prototype.values.call(arrayLike)) {
  console.log(entry)
}
// a
// b
// c
