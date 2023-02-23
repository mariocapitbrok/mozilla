//There are no values stored in the array iterator object returned from values(); instead, it stores the address of the array used in its creation, and reads the currently visited index on each iteration. Therefore, its iteration output depends on the value stored in that index at the time of stepping. If the values in the array changed, the array iterator object's values change too.

const arr = ['a', 'b', 'c', 'd', 'e']
const iterator = arr.values()
console.log(iterator) // Array Iterator { }
console.log(iterator.next().value) // "a"
arr[1] = 'n'
console.log(iterator.next().value) // "n"
