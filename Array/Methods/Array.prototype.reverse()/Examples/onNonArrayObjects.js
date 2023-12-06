//The reverse() method reads the length property of this. It then visits each index between 0 and length / 2, and swaps the two corresponding indices on both ends, deleting properties if needed.

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
}
console.log(Array.prototype.reverse.call(arrayLike))
// { '0': 4, length: 3, unrelated: 'foo' }
// The '2' index is deleted because the '0' index was not present originally
