const arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
]
const flattened = arrays.reduceRight((a, b) => a.concat(b), [])
// flattened is [4, 5, 2, 3, 0, 1]
