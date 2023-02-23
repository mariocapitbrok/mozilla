//The shift() method reads the length property of this. If the normalized length is 0, length is set to 0 again (whereas it may be negative or undefined before). Otherwise, the property at 0 is returned, and the rest of the properties are shifted left by one. The length property is decremented by one.

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
}
console.log(Array.prototype.shift.call(arrayLike))
// undefined, because it is an empty slot
console.log(arrayLike)
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {}
// There's no length property, so the length is 0
Array.prototype.shift.call(plainObj)
console.log(plainObj)
// { length: 0 }
