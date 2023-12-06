// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4]
const resultA = arr.every((elem, index, arr) => {
  arr[index + 1]--
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2 // needed to work.
})
console.log(resultA)

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3]
arr.every((elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4 // needed to work.
})

// Loop runs for 3 iterations, even after appending new items.
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4]
arr.every((elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4 // needed to work.
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
