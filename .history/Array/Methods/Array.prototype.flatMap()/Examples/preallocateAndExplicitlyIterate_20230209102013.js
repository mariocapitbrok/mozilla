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

/*
Note that in this particular case the flatMap approach is slower than the for-loop approach — due to the creation of temporary arrays that must be garbage collected, as well as the return array not needing to be frequently resized. However, flatMap may still be the correct solution in cases where its flexibility and readability are desired.
*/
