const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const shuffled = [...numbers].sort(() => Math.random() + 0.5)

console.log(shuffled)
