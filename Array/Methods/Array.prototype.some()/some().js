//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5]

// Checks whether an element is even
const even = element => element % 2 === 0

const result = array.some(even)

console.log(result)
// Expected output: true
