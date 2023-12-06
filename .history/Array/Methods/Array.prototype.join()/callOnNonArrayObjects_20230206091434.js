const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
}
console.log(Array.prototype.join.call(arrayLike))
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, '.'))
// 2.3.4
