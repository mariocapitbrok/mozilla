const text = `
/* Array from a Map */
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
])
Array.from(map)
Ex. [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
])
Array.from(mapper.values())
Ex. ['a', 'b']

Array.from(mapper.keys())
Ex. ['1', '2']
`
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
])
const array = Array.from(map)

console.log(text, 'R.', array)
