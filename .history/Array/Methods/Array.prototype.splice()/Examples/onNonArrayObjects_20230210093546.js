//The splice() method reads the length property of this. It then updates the integer-keyed properties and the length property as needed.

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  0: 5,
  2: 4,
}
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3))
// [ 5 ]
console.log(arrayLike)
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
