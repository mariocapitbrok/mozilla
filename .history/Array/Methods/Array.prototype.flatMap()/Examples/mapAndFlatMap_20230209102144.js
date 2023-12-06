const arr1 = [1, 2, 3, 4]

const resultA = arr1.map(x => [x * 2])
console.log(resultA)
// [[2], [4], [6], [8]]

const resultB = arr1.flatMap(x => [x * 2])
console.log(resultB)
// [2, 4, 6, 8]

// only one level is flattened
const resultC = arr1.flatMap(x => [[x * 2]])
console.log(resultC)
// [[2], [4], [6], [8]]
