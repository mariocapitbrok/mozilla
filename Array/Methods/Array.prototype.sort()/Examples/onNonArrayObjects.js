//The sort() method reads the length property of this. It then collects all existing integer-keyed properties in the range of 0 to length - 1, sorts them, and writes them back. If there are missing properties in the range, the corresponding trailing properties are deleted, as if the non-existent properties are sorted towards the end.

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  0: 5,
  2: 4,
}
console.log(Array.prototype.sort.call(arrayLike))
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }
