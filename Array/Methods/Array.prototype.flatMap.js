// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

/* const arr = [1, 2, 3, 4]

arr.flatMap(x => [x, x * 2])
// is equivalent to
const n = arr.length
const acc = new Array(n * 2)
for (let i = 0; i < n; i++) {
  const x = arr[i]
  acc[i * 2] = x
  acc[i * 2 + 1] = x * 2
}

console.log(arr.flatMap(x => [x, x * 2]))
// [1, 2, 2, 4, 3, 6, 4, 8]
 */

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const a = [5, 4, -3, 20, 17, -33, -4, 18]
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

console.log(a.flatMap(n => (n < 0 ? [] : n % 2 == 0 ? [n] : [n - 1, 1])))

// expected output: [4, 1, 4, 20, 16, 1, 18]
