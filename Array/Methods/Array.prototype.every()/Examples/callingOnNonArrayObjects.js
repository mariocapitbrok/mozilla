const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
}
console.log(Array.prototype.every.call(arrayLike, x => typeof x === 'string')) // true
console.log([].every.call(arrayLike, x => typeof x === 'string')) // true
