//If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less than or equal to 0, the entire array will be searched.

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ['a', 'b', 'c']

const resultA = arr.includes('a', -100) // true
const resultB = arr.includes('b', -100) // true
const resultC = arr.includes('c', -100) // true
const resultD = arr.includes('a', -2) // false
