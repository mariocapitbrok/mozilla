const letters = ['a', 'b', 'c']

const alphaNumeric = letters.concat(1, [2, [3, 4]])

console.log(alphaNumeric)
// results in ['a', 'b', 'c', 1, 2, 3]
