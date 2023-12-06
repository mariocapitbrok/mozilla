const numbers = [40, 1, 5, 200]

const ascending = [...numbers].sort((a, b) => a - b)
const descending = [...numbers].sort((a, b) => b - a)

console.log(ascending)
console.log(descending)
