//The copyWithin() method reads the length property of this and then manipulates the integer indices involved.

const arrayLike = {
  length: 5,
  3: 1,
}
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3))
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1))
// { '0': 1, length: 5 }
// The '3' property is deleted because the copied source is an empty slot
