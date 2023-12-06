const text1 = `
/* Array from a Map */
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
])
Array.from(map)
Ex. [[1, 2], [2, 4], [4, 8]]
`
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
])
const array1 = Array.from(map)

console.log(text1, 'R.', array1)
