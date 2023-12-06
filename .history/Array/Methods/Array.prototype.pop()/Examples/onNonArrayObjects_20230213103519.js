//The pop() method reads the length property of this. If the normalized length is 0, length is set to 0 again (whereas it may be negative or undefined before). Otherwise, the property at length - 1 is returned and deleted.

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
}
console.log(Array.prototype.pop.call(arrayLike))
// 4
console.log(arrayLike)
// { length: 2, unrelated: 'foo' }

const plainObj = {}
// There's no length property, so the length is 0
Array.prototype.pop.call(plainObj)
console.log(plainObj)
// { length: 0 }
