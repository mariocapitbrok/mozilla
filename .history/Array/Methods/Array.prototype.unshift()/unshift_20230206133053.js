//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const array = [1, 2, 3]

const result = array.unshift(4, 5)

console.log(result)
// Expected output: 5

console.log(array)
// Expected output: Array [4, 5, 1, 2, 3]
