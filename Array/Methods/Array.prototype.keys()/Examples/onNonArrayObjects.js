//The keys() method reads the length property of this and then yields all integer indices between 0 and length - 1. No index access actually happens.

const arrayLike = {
  length: 3,
}
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry)
}
// 0
// 1
// 2
