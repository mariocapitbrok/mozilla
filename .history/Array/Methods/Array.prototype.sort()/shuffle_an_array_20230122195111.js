let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let shuffled = [...numbers].sort(() => Math.random() - 0.5)
const descending = [...numbers].sort((a, b) => b - a)

console.log(shuffled)
console.log(descending)
