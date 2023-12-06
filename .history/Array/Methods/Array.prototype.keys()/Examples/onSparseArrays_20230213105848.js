//Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.

const arr = ['a', , 'c']
const sparseKeys = Object.keys(arr)
const denseKeys = [...arr.keys()]
console.log(sparseKeys) // ['0', '2']
console.log(denseKeys) // [0, 1, 2]
