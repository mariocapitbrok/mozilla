// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const a = [5, 12, 50, 130, 44]

const isLargeNumber = e => e > 45

const result = a.findLastIndex(isLargeNumber)

console.log(result)
// Expected output: 3
// Index of element with value: 130
