//You can search for undefined in a sparse array and get true.

const result = [1, , 3].includes(undefined)
console.log(result) // true
