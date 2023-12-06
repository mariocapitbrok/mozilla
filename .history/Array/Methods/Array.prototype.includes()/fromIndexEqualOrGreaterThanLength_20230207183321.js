//If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

const arr = ['a', 'b', 'c']

const resultA = arr.includes('c', 3) // false
const resultB = arr.includes('c', 100) // false

console.log(resultA)
console.log(resultB)
