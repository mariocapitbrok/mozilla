//The unshift() method reads the length property of this. It then shifts all properties in the range 0 to length - 1 right by the number of arguments and sets each index starting at 0 with the arguments passed to unshift(). Finally, it sets the length to the previous length plus the number of prepended elements.

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
}

Array.prototype.unshift.call(arrayLike, 1, 2)
console.log(arrayLike)
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {}
// There's no length property, so the length is 0

;[].unshift.call(plainObj, 1, 2)
console.log(plainObj)
// { '0': 1, '1': 2, length: 2 }
