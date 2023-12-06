//If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

const arr = ['a', 'b', 'c']

arr.includes('c', 3) // false
arr.includes('c', 100) // false
