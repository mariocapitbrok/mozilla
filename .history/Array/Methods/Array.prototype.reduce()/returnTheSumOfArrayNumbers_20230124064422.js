const array1 = [1, 2, 3, 4]

const initialValue = 0

const sumWithInitial = [...array1].reduce((sum, current) => sum + current)

console.log(sumWithInitial)
