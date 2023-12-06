// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
]

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
)

console.log(result)

// Expected output: Array [4, 5, 2, 3, 0, 1]
// See also Array.prototype.reduce() for left-to-right.
