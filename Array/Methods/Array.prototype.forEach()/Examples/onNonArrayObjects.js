//Calling forEach() on non-array objects

//The forEach() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
}
Array.prototype.forEach.call(arrayLike, x => console.log(x))
// 2
// 3
// 4
