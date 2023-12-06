//A sparse array remains sparse after map(). The indices of empty slots are still empty in the returned array, and the callback function won't be called on them.

console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`)
    return x * 2
  })
)
// Visit 0
// Visit 2
// [2, empty, 6]
