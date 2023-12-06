//In case you want reverse() to not mutate the original array, but return a shallow-copied array like other array methods (e.g. map()) do, you can do a shallow copy before calling reverse(), using the spread syntax or Array.from().

const numbers = [3, 2, 4, 1, 5]
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse()
reverted[0] = 5
console.log(numbers[0]) // 3
