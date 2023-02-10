//The filter() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
}
console.log(Array.prototype.filter.call(arrayLike, x => x <= 'b'))
// [ 'a', 'b' ]
