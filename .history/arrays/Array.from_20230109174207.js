// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

console.log(`
Array.from('foo')
expected output: Array ["f", "o", "o"]
`)
console.log(Array.from('foo'))

console.log(`
Array.from([1, 2, 3], x => x + x)
expected output: Array [2, 4, 6]
`)
console.log(Array.from([1, 2, 3], x => x + x))

console.log(`
Sequence generator (range)
Array.from({ length: 5 }, (v, i) => i)
expected output: Array [0, 1, 2, 3, 4]
`)
console.log(Array.from({ length: 5 }, (v, i) => i))

console.log(`
Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
`)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

console.log(`
Generate numbers range 0..4
range(0, 4, 1)
expected output: Array [0, 1, 2, 3, 4]
`)
console.log(range(0, 4, 1))

console.log(`
Generate numbers range 1..10 with step of 2
range(1, 10, 2)
expected output: Array [1, 3, 5, 7, 9]
`)
console.log(range(1, 10, 2))

console.log(`
Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x =>
  String.fromCharCode(x)
)
expected output: Array ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
`)
console.log(
  range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x =>
    String.fromCharCode(x)
  )
)
