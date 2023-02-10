//To mimic the function of the includes() method, this custom function returns true if the element exists in the array:

const fruits = ['apple', 'banana', 'mango', 'guava']

function checkAvailability(arr, val) {
  return arr.some(v => v === val)
}

const resultA = checkAvailability(fruits, 'kela') // false
const resultB = checkAvailability(fruits, 'banana') // true

console.log(resultA)
console.log(resultB)
