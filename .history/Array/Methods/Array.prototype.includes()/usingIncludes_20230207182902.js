const resultA = [1, 2, 3].includes(2) // true
const resultB = [1, 2, 3].includes(4) // false
const resultC = [1, 2, 3].includes(3, 3) // false
const resultD = [1, 2, 3].includes(3, -1) // true
const resultE = [1, 2, NaN].includes(NaN) // true
const resultF = ['1', '2', '3'].includes(3) // false

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
console.log(resultE)
console.log(resultF)
