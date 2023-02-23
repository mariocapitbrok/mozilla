//The at() method reads the length property of this and calculates the index to access.

const arrayLike = {
  length: 2,
  0: 'a',
  1: 'b',
}
console.log(Array.prototype.at.call(arrayLike, -1)) // "b"
