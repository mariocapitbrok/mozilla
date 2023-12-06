//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]]

console.log(arr1.flat())
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]]

console.log(arr2.flat(2))
// Expected output: Array [0, 1, 2, Array [3, 4]]
