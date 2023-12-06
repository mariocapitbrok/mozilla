//The some() method reads the length property of this and then accesses each integer index until the end is reached or callbackFn returns true.

const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
}
console.log(Array.prototype.some.call(arrayLike, x => typeof x === 'number'))
// false
