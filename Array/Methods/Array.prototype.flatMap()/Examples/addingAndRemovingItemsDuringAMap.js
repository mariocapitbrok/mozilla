//flatMap can be used as a way to add and remove items (modify the number of items) during a map. In other words, it allows you to map many items to many items (by handling each input item separately), rather than always one-to-one. In this sense, it works like the opposite of filter. Return a 1-element array to keep the item, a multiple-element array to add items, or a 0-element array to remove the item.

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const a = [5, 4, -3, 20, 17, -33, -4, 18]
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap(n => {
  if (n < 0) {
    return []
  }
  return n % 2 === 0 ? [n] : [n - 1, 1]
})
console.log(result) // [4, 1, 4, 20, 16, 1, 18]
