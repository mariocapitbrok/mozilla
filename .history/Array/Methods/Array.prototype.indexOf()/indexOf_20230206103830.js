// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

resultA = beasts.indexOf('bison')
resultB = beasts.indexOf('bison', 2)
resultC = beasts.indexOf('giraffe')

console.log(resultA)
// Expected output: 1

console.log(resultB)
// Start from index 2
// Expected output: 4

console.log(resultC)
// Expected output: -1
