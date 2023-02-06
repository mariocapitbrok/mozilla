//The push() method reads the length property of this. It then sets each index of this starting at length with the arguments passed to push(). Finally, it sets the length to the previous length plus the number of pushed elements.

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
}

Array.prototype.push.call(arrayLike, 1, 2)
console.log(arrayLike)
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }

const plainObj = {}
// There's no length property, so the length is 0
;[].call(plainObj, 1, 2)
console.log(plainObj)
// { '0': 1, '1': 2, length: 2 }
