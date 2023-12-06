//The sort() method returns a reference to the original array, so mutating the returned array will mutate the original array as well.

const numbers = [3, 1, 4, 1, 5]
const sorted = numbers.sort((a, b) => a - b)
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10
console.log(numbers[0]) // 10
