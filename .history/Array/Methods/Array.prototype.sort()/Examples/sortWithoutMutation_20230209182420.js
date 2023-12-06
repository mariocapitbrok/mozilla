//In case you want sort() to not mutate the original array, but return a shallow-copied array like other array methods (e.g. map()) do, you can do a shallow copy before calling sort(), using the spread syntax or Array.from().

const numbers = [3, 1, 4, 1, 5]
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b)
sorted[0] = 10
console.log(numbers[0]) // 3
