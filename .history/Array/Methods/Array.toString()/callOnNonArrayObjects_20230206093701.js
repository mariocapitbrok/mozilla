const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
}

const result = Array.prototype.toString.call(arrayLike)

console.log(result)
// 1,2,3
