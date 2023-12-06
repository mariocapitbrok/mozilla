const arr = [1, 2, 3, 4]

const resultA = arr.flatMap(x => [x, x * 2])

console.log(resultA)

// is equivalent to
const n = arr.length
const acc = new Array(n * 2)
for (let i = 0; i < n; i++) {
  const x = arr[i]
  acc[i * 2] = x
  acc[i * 2 + 1] = x * 2
}

console.log(acc)
// [1, 2, 2, 4, 3, 6, 4, 8]
