//Calling fill() on non-array objects

//The fill() method reads the length property of this and sets the value of each integer property from start to end.

const arrayLike = { length: 2 }
console.log(Array.prototype.fill.call(arrayLike, 1))
// { '0': 1, '1': 1, length: 2 }
