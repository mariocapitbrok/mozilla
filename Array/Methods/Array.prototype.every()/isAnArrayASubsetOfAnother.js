const isSubset = (arrayA, arrayB) =>
  arrayB.every(element => arrayA.includes(element))

const arrayA = [1, 2, 3, 4, 5, 6, 7]
const arrayB = [5, 7, 6]
const arrayC = [5, 8, 7]

const resultA = isSubset(arrayA, arrayB)
const resultB = isSubset(arrayA, arrayC)

console.log(resultA) // true
console.log(resultB) // false
