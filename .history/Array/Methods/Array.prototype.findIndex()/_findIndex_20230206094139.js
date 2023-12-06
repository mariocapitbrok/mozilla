const array1 = [5, 12, 8, 130, 44]

const isLargeNumber = element => element > 13

const result = array1.findIndex(isLargeNumber)

console.log(result)
// Expected output: 3
