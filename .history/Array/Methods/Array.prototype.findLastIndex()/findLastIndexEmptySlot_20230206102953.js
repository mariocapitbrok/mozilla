// You can search for undefined in a sparse array and get the index of an empty slot.

const a = [5, 4, 7, , 3, 9]

const resultA = a.findIndex(x => x === undefined)

console.log(resultA) // 3
