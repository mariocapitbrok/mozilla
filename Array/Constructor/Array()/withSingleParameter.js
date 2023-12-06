//Arrays can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots.

const fruits = new Array(2)

console.log(fruits.length) // 2
console.log(fruits[0]) // undefined
